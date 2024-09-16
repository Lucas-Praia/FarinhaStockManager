import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {CartItem} from "../models/cartItem";
import {Sale} from "../models/sale";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private products: Product[]= [
    { id: 1, name: 'Product 1', price: 19.99, image: '/api/placeholder/250/150' },
    { id: 2, name: 'Product 2', price: 29.99, image: '/api/placeholder/250/150' },
    { id: 3, name: 'Product 3', price: 39.99, image: '/api/placeholder/250/150' },
    { id: 4, name: 'Product 4', price: 49.99, image: '/api/placeholder/250/150' },
  ]
  private cart: { [key: number]: CartItem } = {}
  private sales: Sale[]= [];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  addToCart(product: Product, quantity: number): void {
    if (this.cart[product.id]) {
      this.cart[product.id].quantity += quantity;
    } else {
      this.cart[product.id] = { product, quantity };
    }
  }

  getCartItems(): CartItem[] {
    return Object.values(this.cart);
  }

  getCartTotal(): number {
    return Object.values(this.cart).reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
  addSale(product: Product, quantity: number): void {
    const sale: Sale = {
      id: this.sales.length + 1,
      product,
      quantity,
      totalPrice: product.price * quantity,
      saleDate: new Date(),
    };
    this.sales.push(sale);
  }

  getSales(): Sale[] {
    return this.sales;
  }
}
