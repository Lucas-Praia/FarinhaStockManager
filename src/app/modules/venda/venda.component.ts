import {Component, OnInit, ViewEncapsulation,} from '@angular/core';
import {ApiService} from "../../api.service";
import {Product} from "../../../models/product";
import {DialogpagamentoComponent} from "../dialogpagamento/dialogpagamento.component";
import { MatDialog } from '@angular/material/dialog';
import {Router} from "@angular/router";

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.css',
  encapsulation: ViewEncapsulation.None
})

export class VendaComponent implements OnInit {
  products: Product[] = [];
  cartItems: { product: Product; quantity: number }[] = [];
  cartTotal: number = 0;


  constructor(private apiService: ApiService, public dialog: MatDialog,private router: Router) {
    this.router.events.subscribe(() => {this.dialog.closeAll();
    });
  }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCart();
  }

  loadProducts(): void {
    this.products = this.apiService.getProducts();
  }

  loadCart(): void {
    this.cartItems = this.apiService.getCartItems();
    this.cartTotal = this.apiService.getCartTotal();
  }

  addToCart(product: Product): void {
    this.apiService.addToCart(product, 1);
    this.loadCart();
  }

  openPaymentDialog(): void {
    const dialogRef = this.dialog.open(DialogpagamentoComponent, {
      width: '300px',
      height: '200px',
      panelClass: 'center-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Método de pagamento selecionado:', result);
      } else {
        console.log('Nenhum método de pagamento selecionado');
      }
    });
  }
}
