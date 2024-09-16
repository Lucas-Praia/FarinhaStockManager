import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {ProdutosComponent} from "./modules/produtos/produtos.component";
import {VendaComponent} from "./modules/venda/venda.component";
import {HistoricoComponent} from "./modules/historico/historico.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'venda', component: VendaComponent},
  {path: 'historico', component: HistoricoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
