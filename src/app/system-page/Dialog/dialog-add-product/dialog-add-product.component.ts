import { Component, OnInit } from '@angular/core';
import {Category} from "../../../Models/ViewModels/Category";
import {ApiService} from "../../../login/Services/api.service";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {CreateProductRequest} from "../../../Models/RequestModels/CreateProductRequest";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html',
  styleUrls: ['./dialog-add-product.component.scss']
})
export class DialogAddProductComponent implements OnInit {
  url = '';
  hostimg = 'http://localhost:1235/';
  FormAddProduct = this.fb.group({
    name:[''],
    description:[''],
    imageURL:[''],
    quantityAvailable:[''],
    price:[''],
    size:[''],
    brand:[''],
    categoryIDs: new FormArray([])
  }) ;
  ListCategory: Category[]=[];
  // @ts-ignore
  constructor(private api:ApiService,
              private fb:FormBuilder,
              private dialogRef:DialogRef) { }

  ngOnInit(): void {
    this.GetCategory()
  }

  ngOnDestroy() {
    this.dialogRef.close();
  }

  GetCategory(){
    this.api.GetListCategory().subscribe(res=>{
      // @ts-ignore
      this.ListCategory = res
      console.log(this.ListCategory)
    })
  }

  onSelectFile(e:any) {
    if (e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any)=>{
        this.url = event.target.result;
      }
      console.log(e.target.files)
      this.FormAddProduct.controls['imageURL'].setValue(this.hostimg+e.target.files[0].name)
      console.log(e.target.files[0].name)
    }
  }

  HandleAddProduct() {
    // @ts-ignore
    this.api.CreateProduct(this.FormAddProduct.value as CreateProductRequest).subscribe(res=>{
      alert("Success")
      this.FormAddProduct.reset()
      this.dialogRef.close()
    })
  }

  onSelect(e: any) {
    // @ts-ignore
    const categoryID = (this.FormAddProduct.controls['categoryIDs'] as FormArray);
    if (e.target.checked){
      categoryID.push(new FormControl(e.target.value));
    }else {
      const index = categoryID.controls.findIndex(x => x.value === e.target.value);
      categoryID.removeAt(index);
    }
    console.log(e.target.value)
    console.log(categoryID.value)
  }
}
