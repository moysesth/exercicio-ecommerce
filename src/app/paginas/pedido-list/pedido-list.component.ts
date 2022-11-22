import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { PedidoObserverServicoService } from 'src/app/servicos/pedidoObserverServico.service';
import { PedidoServico } from 'src/app/servicos/pedidoServico';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {

  constructor(
    private router:Router,
    private pedidoObserverServicoService: PedidoObserverServicoService
  ) { }

  ngOnInit(): void {
  }
  
  public pedidos:Pedido[] = PedidoServico.buscaPedidos()

  novo(){
    this.router.navigateByUrl("/form")
  }

  excluir(pedido:Pedido){
    PedidoServico.excluirPedido(pedido)
    this.pedidos = PedidoServico.buscaPedidos()
    this.pedidoObserverServicoService.atualizaCarrinho();
  }
}
