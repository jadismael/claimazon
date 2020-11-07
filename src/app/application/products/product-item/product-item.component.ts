import { Component, OnInit } from '@angular/core';
import {ProductInterface} from '../../../core/interfaces/productInterface';
import {ProductService} from '../../../core/services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
product: ProductInterface;
sku: string;
  constructor(private productService: ProductService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {

    this.route.params.subscribe((params) => {
      this.sku = params?.sku;
      if (this.sku)
      { this.product = this.productService.getProduct( this.sku);
      }
    });
  }
}
