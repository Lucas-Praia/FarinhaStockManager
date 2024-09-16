import {Component, OnInit} from '@angular/core';
import { MenuItem} from 'primeng/api'
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ProdutosComponent} from "../produtos/produtos.component";
import {VendaComponent} from "../venda/venda.component";
import {HistoricoComponent} from "../historico/historico.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[]

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'dashboard', routerLink: '/dashboard'},
      { label: 'Produtos', icon: 'dashboard', routerLink: '/produtos' },
      { label: 'Venda', icon: 'dashboard', routerLink: '/venda' },
      { label: 'Histórico', icon: 'dashboard', routerLink: '/historico' },
    ]
  }

}
