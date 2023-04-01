import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {LoginRequest} from "../../Models/RequestModels/LoginRequest";
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../../Models/ViewModels/LoginResponse";
import {environment} from "../../../environments/environment";
import {RegistrationRequest} from "../../Models/RequestModels/RegistrationRequest";
import {UserResponse} from "../../Models/ViewModels/UserResponse";
import {Product} from "../../Models/Product";
import {Category} from "../../Models/ViewModels/Category";
import {EditCategoryRequest} from "../../Models/RequestModels/EditCategoryRequest";
import {EditUserRequest} from "../../Models/RequestModels/EditUserRequest";
import {CreateProductRequest} from "../../Models/RequestModels/CreateProductRequest";
import {EditProductRequest} from "../../Models/RequestModels/EditProductRequest";
import {CreateCategoryRequest} from "../../Models/RequestModels/CreateCategoryRequest";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient, private route:Router,private fb:FormBuilder) { }

  Login=(request:LoginRequest)=>this.httpClient.post<LoginResponse>(`${environment.api_domain}/Authentication/Login`,request);
  Registration=(request:RegistrationRequest)=>this.httpClient.post<boolean>(`${environment.api_domain}/Authentication/Registration`,request);
  GetListUser=()=>this.httpClient.get<UserResponse[]>(`${environment.api_domain}/Authentication/Get-list-user`)
  DeleteUser=(id:string)=>this.httpClient.delete(`${environment.api_domain}/Authentication/Delete-User`+id);
  GetListCategory = () => this.httpClient.get<Category>(`${environment.api_domain}/Category/get-category`);
  DeleteProduct=(id:string)=> this.httpClient.delete<any>(`${environment.api_domain}/Product/delete-product/${id}`);
  EditUser=(request:EditUserRequest)=>this.httpClient.post<EditUserRequest>(`${environment.api_domain}/Authentication/Edit-user`,request)
  CreateProduct=(request:CreateProductRequest)=>this.httpClient.post<Product>(`${environment.api_domain}/Product/add-product`,request)
  EditProduct=(request:EditProductRequest)=>this.httpClient.post<Product>(`${environment.api_domain}/Product/update`,request);
  CreateCategory=(request:CreateCategoryRequest)=>this.httpClient.post<Category>(`${environment.api_domain}/Category/add-category`,request);
  GetProduct = () => this.httpClient.get<any>(`${environment.api_domain}/Product/get-product`);
  DeleteCategory=(id:string)=> this.httpClient.delete<any>(`${environment.api_domain}/Category/delete-category/${id}`);
  EditCategory=(request:EditCategoryRequest)=>this.httpClient.post<any>(`${environment.api_domain}/Category/edit-category`,request);
  GetBill =()=>this.httpClient.get<any>(`${environment.api_domain}/Bill/admin-get-bill`);
  DeleteBill = (id:string) => this.httpClient.delete<any>(`${environment.api_domain}/Bill/delete-bill/${id}`)
  SearchBill = (CustomerName:string) => this.httpClient.get<any>(`${environment.api_domain}/Bill/search-bill-by-name/${CustomerName}`,)
  Searchproduct =(request:string)=>this.httpClient.get<any>(`${environment.api_domain}/Product/search-product/${request}`)
  ConfirmBill = (id:string)=> this.httpClient.post<any>(`${environment.api_domain}/Bill/confirm-bill/${id}`,id)
  GetTypeProduct = () => this.httpClient.get<any>(`${environment.api_domain}/TypeProduct/get`)
  GetRevenue = () => this.httpClient.get<any>(`${environment.api_domain}/Bill/get-revenue`);
  GetRevenueMonth = (Month:number,Year:number) => this.httpClient.get<any>(`${environment.api_domain}/Bill/get-revenue-month/${Month},${Year}`);
  GetRatioRevenue = (year:number) => this.httpClient.get<any>(`${environment.api_domain}/Bill/get-ratio/${year}`)
  GetYearinDB = () => this.httpClient.get<any>(`${environment.api_domain}/Bill/get-list-year`)
}
