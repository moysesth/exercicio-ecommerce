import { Component, OnInit } from '@angular/core';
import { ClienteObserverServicoService } from 'src/app/servicos/clienteObserverServico.service';
import { PedidoObserverServicoService } from 'src/app/servicos/pedidoObserverServico.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public clienteObserverServicoService: ClienteObserverServicoService,
    public pedidoObserverServicoSerce: PedidoObserverServicoService,
    ) { }

  ngOnInit(): void {
  }
}
