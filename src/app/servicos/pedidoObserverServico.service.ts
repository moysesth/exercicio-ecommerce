import { Injectable } from '@angular/core';
import { PedidoServico } from './pedidoServico';

@Injectable({
  providedIn: 'root'
})
export class PedidoObserverServicoService {

  constructor() { 
    this.atualizaCarrinho()
  }

  public quantidade:Number = 0

  atualizaCarrinho(){
    console.log("--- Entrou no metodo ---")
    this.quantidade = PedidoServico.buscaPedidos().length;
  }
}
