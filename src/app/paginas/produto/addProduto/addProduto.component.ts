import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoObserverServicoService } from 'src/app/servicos/produtoObserverServico.service';
import { ProdutoServico } from 'src/app/servicos/produtoServico';

@Component({
  selector: 'app-addProduto',
  templateUrl: './addProduto.component.html',
  styleUrls: ['./addProduto.component.css']
})
export class AddProdutoComponent implements OnInit {

  constructor(
    private router:Router,
    private routerParams: ActivatedRoute,
    private produtoObserverServicoService: ProdutoObserverServicoService
  ) { }

  public titulo:String = "Novo produto"
  public produto:Produto = {} as Produto
  public preco:String = ""
  public precoPlugin:String = ""

  ngOnInit(): void {
    let idProduto:Number = this.routerParams.snapshot.params['idProduto']
    if(idProduto){
      this.titulo = "Alterando produto"
      this.produto = ProdutoServico.buscaProdutoPorId(idProduto)
    }
  }

  salvar(){
    if(this.produto.idProduto > 0){
      ProdutoServico.alteraProduto(this.produto)
    }
    else{
      ProdutoServico.adicionaProduto({
        idProduto: 0,
        nome: this.produto.nome,
        descricao: this.produto.descricao,
        preco: this.produto.preco
      });
    }

    this.produtoObserverServicoService.atualizaEstoque();
    this.router.navigateByUrl("/produtos")
  }

  private convertNumber(preco:String): Number{
    let precoMatch = preco.match(/\d|\.|,/g)
    if(precoMatch == null) return 0
    let precoBrasileiro = precoMatch.join("")
    let precoAmericano = precoBrasileiro.replace(".", "").replace(",", ".")
    return Number(precoAmericano)
  }

  somenteNumero(){
    let precoMatch = this.preco.match(/\d|\.|,/g)
    if(precoMatch == null){
      this.preco = ""
      return
    }

    this.preco = precoMatch.join("")
  }

  marcara(){
    let precoFloat = Number(this.preco)
    this.preco = precoFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

}
