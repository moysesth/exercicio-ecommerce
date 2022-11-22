import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteObserverServicoService } from 'src/app/servicos/clienteObserverServico.service';
import { ClienteServico } from 'src/app/servicos/clienteServico';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private router:Router,
    private routerParams: ActivatedRoute,
    private clienteObserverServicoService: ClienteObserverServicoService
  ) { }

  public titulo:String = "Novo cliente"
  public cliente:Cliente = {} as Cliente
  public valor:String = ""
  public valorPlugin:String = ""

  ngOnInit(): void {
    let idCliente:Number = this.routerParams.snapshot.params['idCliente']
    if(idCliente){
      this.titulo = "Alterando cliente"
      this.cliente = ClienteServico.buscaClientePorId(idCliente)
    }
  }

  salvar(){
    if(this.cliente.idCliente > 0){
      ClienteServico.alteraCliente(this.cliente)
    }
    else{
      ClienteServico.adicionaCliente({
        idCliente: 0,
        nome: this.cliente.nome,
      });
    }

    this.clienteObserverServicoService.atualizaQuantidade();
    this.router.navigateByUrl("/clientes")
  }

  private convertNumber(valor:String): Number{
    let valorMatch = valor.match(/\d|\.|,/g)
    if(valorMatch == null) return 0
    let valorBrasileiro = valorMatch.join("")
    let valorAmericano = valorBrasileiro.replace(".", "").replace(",", ".")
    return Number(valorAmericano)
  }

  somenteNumero(){
    let valorMatch = this.valor.match(/\d|\.|,/g)
    if(valorMatch == null){
      this.valor = ""
      return
    }

    this.valor = valorMatch.join("")
  }

  marcara(){
    let valorFloat = Number(this.valor)
    this.valor = valorFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

}
