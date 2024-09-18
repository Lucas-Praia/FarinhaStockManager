import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './modules/toolbar/toolbar.component';
import {TabMenuModule} from "primeng/tabmenu";
import { ProdutosComponent } from './modules/produtos/produtos.component';
import { VendaComponent } from './modules/venda/venda.component';
import { HistoricoComponent } from './modules/historico/historico.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {TableModule} from "primeng/table";
import {Button, ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import { DialogpagamentoComponent } from './modules/dialogpagamento/dialogpagamento.component';
import {DialogModule} from "primeng/dialog";
import {RadioButtonModule} from "primeng/radiobutton";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";





@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProdutosComponent,
    VendaComponent,
    HistoricoComponent,
    DashboardComponent,
    DialogpagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    TableModule,
    Button,
    CardModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    RadioButtonModule,
    MatRadioButton,
    MatRadioGroup,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
