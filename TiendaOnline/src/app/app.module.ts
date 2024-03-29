import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ProductMainComponent } from './product-main/product-main.component';
import { TiendaOnlineAboutComponent } from './tienda-online-about/tienda-online-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductMainComponent } from './add-product-main/add-product-main.component';


@NgModule({
  declarations:[
    AppComponent,
    ProductListComponent,
    CartComponent,
    ProductMainComponent,
    TiendaOnlineAboutComponent,
    InputIntegerComponent,
    AddProductComponent,
    AddProductMainComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
