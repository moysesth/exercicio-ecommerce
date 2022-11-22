import { Injectable } from '@angular/core';
import { ProdutoServico } from './produtoServico';

@Injectable({
  providedIn: 'root'
})
export class ProdutoObserverServicoService {

  constructor() { 
    this.atualizaEstoque()
  }

  public quantidade:Number = 0

  atualizaEstoque(){
    console.log("--- Entrou no metodo ---")
    this.quantidade = ProdutoServico.buscaProdutos().length;
  }
}
