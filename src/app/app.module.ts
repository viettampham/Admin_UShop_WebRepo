import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { SystemPageComponent } from './system-page/system-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MultilevelMenuService, NgMaterialMultilevelMenuModule} from "ng-material-multilevel-menu";
import { MnUserComponent } from './system-page/component/mn-user/mn-user.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MnProductComponent } from './system-page/component/mn-product/mn-product.component';
import { MnCategoryComponent } from './system-page/component/mn-category/mn-category.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DialogAddUserComponent } from './system-page/Dialog/dialog-add-user/dialog-add-user.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { DialogEditUserComponent } from './system-page/Dialog/dialog-edit-user/dialog-edit-user.component';
import { DialogEditCategoryComponent } from './system-page/Dialog/dialog-edit-category/dialog-edit-category.component';
import { DialogAddProductComponent } from './system-page/Dialog/dialog-add-product/dialog-add-product.component';
import { DialogEditProductComponent } from './system-page/Dialog/dialog-edit-product/dialog-edit-product.component';
import { DialogAddCategoryComponent } from './system-page/Dialog/dialog-add-category/dialog-add-category.component';
import {JwtModule} from "@auth0/angular-jwt";
import { MnBillComponent } from './system-page/component/mn-bill/mn-bill.component';
import { DialogViewBillComponent } from './system-page/Dialog/dialog-view-bill/dialog-view-bill.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SystemPageComponent,
    MnUserComponent,
    MnProductComponent,
    MnCategoryComponent,
    DialogAddUserComponent,
    DialogEditUserComponent,
    DialogEditCategoryComponent,
    DialogAddProductComponent,
    DialogEditProductComponent,
    DialogAddCategoryComponent,
    MnBillComponent,
    DialogViewBillComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        NgMaterialMultilevelMenuModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDialogModule,
        MatButtonModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: ["example.com"],
            disallowedRoutes: ["http://example.com/examplebadroute/"],
          },
        }),
    ],
  providers: [MultilevelMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
