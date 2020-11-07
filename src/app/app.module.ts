import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './application/products/products.component';
import { ProductItemComponent } from './application/products/product-item/product-item.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
