import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductMainComponent } from './add-product-main/add-product-main.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { TiendaOnlineAboutComponent } from './tienda-online-about/tienda-online-about.component';

const routes: Routes = [
{ path:'', redirectTo: 'products', pathMatch:'full'},
{ path:'products',component: ProductMainComponent },
{ path:'about',component: TiendaOnlineAboutComponent },
{ path:'add',component: AddProductMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
