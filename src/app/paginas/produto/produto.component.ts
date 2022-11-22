import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoObserverServicoService } from 'src/app/servicos/produtoObserverServico.service';
import { ProdutoServico } from 'src/app/servicos/produtoServico';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoListComponent implements OnInit {

  constructor(
    private router:Router,
    private produtoObserverServicoService: ProdutoObserverServicoService
  ) { }

  ngOnInit(): void {
  }
  
  public produtos:Produto[] = ProdutoServico.buscaProdutos()

  novo(){
    this.router.navigateByUrl("/form")
  }

  addCarrinho(produto:Produto){
    ProdutoServico.addCarrinho(produto)
    this.produtos = ProdutoServico.buscaProdutos()
    this.produtoObserverServicoService.atualizaEstoque();
  }
}
