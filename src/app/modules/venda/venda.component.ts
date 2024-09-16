import {Component, OnInit} from '@angular/core';
import {Sale} from "../../../models/sale";
import {ApiService} from "../../api.service";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.css'
})

export class VendaComponent implements OnInit {
  products: Product[] = [];
  cartItems: { product: Product; quantity: number }[] = [];
  cartTotal: number = 0;
  newProduct: Product = { id: 0, name: '', price: 0, image: '' };


  constructor(private apiService: ApiService) {}

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
  addProduct(): void {
    if (this.newProduct.name && this.newProduct.price >= 0) {
      this.products.push({ ...this.newProduct, id: this.products.length + 1 });
      this.newProduct = { id: 0, name: '', price: 0, image: '' };
    } else {
      console.error('Preencha todos os campos do produto.');
    }
  }

  addToCart(product: Product): void {
    this.apiService.addToCart(product, 1);
    this.loadCart();
  }
}

