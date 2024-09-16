import { Component } from '@angular/core';
import {Product} from "../../../models/product";


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  productName: string = '';
  productPrice: number | null=null;
  products: Product[] = [];


  addProduct() {
    if (this.productName && this.productPrice) {
      const newProduct: Product = {
        id: this.products.length + 1,
        name: this.productName,
        price: this.productPrice,

      };

      this.products.push(newProduct);
      this.clearInputs();
    }
  }

  clearInputs() {
    this.productName = '';

  }
}

