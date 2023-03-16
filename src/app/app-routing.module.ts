import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SystemPageComponent} from "./system-page/system-page.component";
import {MnUserComponent} from "./system-page/component/mn-user/mn-user.component";
import {MnProductComponent} from "./system-page/component/mn-product/mn-product.component";
import {MnCategoryComponent} from "./system-page/component/mn-category/mn-category.component";
import {MnBillComponent} from "./system-page/component/mn-bill/mn-bill.component";

const routes: Routes = [
  {path:"",component:LoginComponent},
  {
    path:"system",component:SystemPageComponent,
    children:[
      {path:'manager-user',component:MnUserComponent},
      {path:'manager-product',component:MnProductComponent},
      {path:'manager-category',component:MnCategoryComponent},
      {path:'manager-bill',component:MnBillComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
