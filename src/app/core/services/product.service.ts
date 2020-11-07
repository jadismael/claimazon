import { Injectable } from '@angular/core';
import { Products } from 'src/assets/mocks/mock-products';
import { ProductInterface } from '../interfaces/productInterface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  data: Array<ProductInterface>;
  constructor() {}
  getProducts(): ProductInterface[] {
    return Products;
  }

  getProduct(sku: string): ProductInterface
  {
   return Products.find(
      item => item.sku === sku);
  }
}
