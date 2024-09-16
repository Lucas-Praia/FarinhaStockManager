import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './modules/menubar/menubar.component';
import {TabMenuModule} from "primeng/tabmenu";
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProdutosComponent } from './modules/produtos/produtos.component';
import { VendaComponent } from './modules/venda/venda.component';
import { HistoricoComponent } from './modules/historico/historico.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    DashboardComponent,
    ProdutosComponent,
    VendaComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
