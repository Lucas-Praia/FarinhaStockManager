import {Product} from "./product";

export class Sale {
  id: number;
  product: Product;
  quantity: number;
  totalPrice: number;
  saleDate: Date;
}
