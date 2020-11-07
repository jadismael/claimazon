import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/interfaces/productInterface';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: ProductInterface[];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.products = this.productService.getProducts();
  }

}
