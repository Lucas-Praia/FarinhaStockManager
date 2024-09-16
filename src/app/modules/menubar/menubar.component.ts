import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
      { label: 'Produtos', icon: 'pi pi-list', routerLink: '/produtos' },
      { label: 'Venda', icon: 'pi pi-chart-line', routerLink: '/venda' },
      { label: 'Histórico', icon: 'pi-calendar-plus', routerLink: '/historico' },

    ]
  }
}
