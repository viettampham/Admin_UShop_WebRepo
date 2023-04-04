import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../login/Services/api.service";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {Category} from "../../../Models/ViewModels/Category";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EditProductRequest} from "../../../Models/RequestModels/EditProductRequest";

@Component({
  selector: 'app-dialog-edit-product',
  templateUrl: './dialog-edit-product.component.html',
  styleUrls: ['./dialog-edit-product.component.scss']
})
export class DialogEditProductComponent implements OnInit {
  url = '';
  hostimg = 'http://localhost:1235/';
  ListCategory: Category[]=[];
  ListCategoryChecked: string[] = [];
  FormEditProduct:any;
  ListType : any;
  TypeChecked:any;

  constructor(private api:ApiService,
              private fb:FormBuilder,
              private dialofRef: MatDialogRef<DialogEditProductComponent>,
              @Inject(MAT_DIALOG_DATA) public editData:any,) { }

  ngOnInit(): void {
    this.GetCategory()
    this.GetType()
    this.FormEditProduct = this.fb.group({
      productID:[''],
      name:[''],
      description:[''],
      imageURL:[''],
      quantityAvailable:[''],
      price:[''],
      size:[''],
      brand:[''],
      categorieIDs: new FormArray([]),
      typeID:['']
    });
    if (this.editData){

      this.url = this.editData.imageURL;
      this.FormEditProduct.controls['productID'].setValue(this.editData.productID);
      this.FormEditProduct.controls['name'].setValue(this.editData.name);
      this.FormEditProduct.controls['description'].setValue(this.editData.description);
      this.FormEditProduct.controls['imageURL'].setValue(this.editData.imageURL);
      this.FormEditProduct.controls['quantityAvailable'].setValue(this.editData.quantityAvailable);
      this.FormEditProduct.controls['price'].setValue(this.editData.price);
      this.FormEditProduct.controls['size'].setValue(this.editData.size);
      this.FormEditProduct.controls['brand'].setValue(this.editData.brand);
      this.FormEditProduct.controls['typeID'].setValue(this.editData.typeProductID)

      for (let c of this.editData.categoryIDs){
        this.ListCategoryChecked.push(c)
      }
      const categoryID = this.FormEditProduct.controls['categorieIDs'] as FormArray;
      this.ListCategoryChecked.forEach(x=>{
        categoryID.push(new FormControl(x))
      })
    }
    this.TypeChecked = this.editData.typeProductID
    //console.log(this.TypeChecked)
  }

  onSelectFile(e: any) {
    if (e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any)=>{
        this.url = event.target.result;
      }
      console.log(e.target.files)
      this.FormEditProduct.controls['imageURL'].setValue(this.hostimg+e.target.files[0].name)
      console.log(e.target.files[0].name)
    }
  }

  GetCategory(){
    this.api.GetListCategory().subscribe(res=>{
      // @ts-ignore
      this.ListCategory = res
    })
  }
  GetType(){
    this.api.GetTypeProduct().subscribe(res=>{
      this.ListType = res

    })
  }

  HandleEditProduct() {
      /*this.FormEditProduct.productID = this.editData.productID;
      this.FormEditProduct.name = this.FormEditProduct.controls['name'];
      this.FormEditProduct.description = this.FormEditProduct.controls['description'];
      this.FormEditProduct.imageURL = this.FormEditProduct.controls['imageURL'];
      this.FormEditProduct.quantityAvailable = this.FormEditProduct.controls['quantityAvailable'];
      this.FormEditProduct.price = this.FormEditProduct.controls['price'];
      this.FormEditProduct.size = this.FormEditProduct.controls['size'];
      this.FormEditProduct.brand = this.FormEditProduct.controls['brand'];
      this.FormEditProduct.categorieIDs = this.FormEditProduct.controls['categorieIDs']*/
    this.api.EditProduct(this.FormEditProduct.value).subscribe(res=>{
      alert("Cập nhật thành công sản phẩm")
      this.dialofRef.close()
      location.reload()
    },error => {
      alert("Lỗi")
    })
  }



  isChecked(id: string) {
    for (let c of this.ListCategoryChecked){
      // @ts-ignore
      if (id === c){
        return true;
      }
    }
    return false;
  }

  onCheckBox(e: any) {
    // @ts-ignore
    const categoryID = this.FormEditProduct.controls['categorieIDs'] as FormArray;
    if (e.target.checked){
      categoryID.push(new FormControl(e.target.value));
    }else {
      const index = categoryID.controls.findIndex(x=>x.value == e.target.value)
      categoryID.removeAt(index)
    }
    //console.log(categoryID)
  }




  onCheck(e: any) {
    const value = e.target.value
    //this.TypeChecked = value
    this.FormEditProduct.value.typeID = value
    //console.log(value)
  }

  isCheckedType(id:string) {
    if (id == this.TypeChecked){
      return true;
    }
    return false;
  }
}
