import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './paginas/contact-list/contact-list.component';
import { FormComponent } from './paginas/form/form.component';
import { HomeComponent } from './paginas/home/home.component';
import { NaoEncontradaComponent } from './paginas/nao-encontrada/nao-encontrada.component';
import { PedidoListComponent } from './paginas/pedido-list/pedido-list.component';
import { PortfolioComponent } from './paginas/portfolio/portfolio.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { ProdutoListComponent } from './paginas/produto/produto.component';
import { AddProdutoComponent } from './paginas/produto/addProduto/addProduto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'form', component: FormComponent },
  { path: 'form-alterar/:id', component: FormComponent },
  { path: 'clientes', component: ContactListComponent },  
  { path: 'pedidos', component: PedidoListComponent },  
  { path: 'produtos', component: ProdutoListComponent },
  { path: '**', component: NaoEncontradaComponent },
  { path: 'produtos/adicionar-produto', component: AddProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
