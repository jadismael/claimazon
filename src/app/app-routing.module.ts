import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './application/products/products.component';
import {ProductItemComponent} from './application/products/product-item/product-item.component';

const routes: Routes = [
  {
    path: '',

    component: ProductsComponent,
  },

  {
    path: 'product/:sku',

    component: ProductItemComponent,
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
