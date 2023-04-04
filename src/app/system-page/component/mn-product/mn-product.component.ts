import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {Product} from "../../../Models/Product";
import {ApiService} from "../../../login/Services/api.service";
import {FormBuilder} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddProductComponent} from "../../Dialog/dialog-add-product/dialog-add-product.component";
import {DialogEditProductComponent} from "../../Dialog/dialog-edit-product/dialog-edit-product.component";
import {style} from "@angular/animations";

@Component({
  selector: 'app-mn-product',
  templateUrl: './mn-product.component.html',
  styleUrls: ['./mn-product.component.scss']
})
export class MnProductComponent implements OnInit{
  Products:Product[] = [];
  displayedColumns: string[] = [/*'id',*/ 'title', 'size', 'price', 'brand', 'quantity', /*'category',*/'action'];
  // @ts-ignore
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api:ApiService,
              private fb: FormBuilder,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.GetListProduct();
  }

  GetListProduct(){
    this.api.GetProduct().subscribe(res=>{
      this.Products = res;
      //console.log(this.Products)
      this.dataSource = new MatTableDataSource<Product>(this.Products);
      this.dataSource.paginator = this.paginator;
    })

  }

  DeleteProduct(id:string) {
    if (confirm("Are you sure?")){
      //console.log(id)
      this.api.DeleteProduct(id).subscribe(res=>{
        alert("Success")
        location.reload()
      })
    }
  }

  ODAProduct() {
    this.dialog.open(DialogAddProductComponent,{
      width:'80%',
    }).afterClosed().subscribe((response) => {
      if (response) {
        this.GetListProduct();
        this.dataSource = new MatTableDataSource<Product>(this.Products);
        this.dataSource.paginator = this.paginator;
      }
    });
  }


  ODEitProduct(p:Product) {
    console.log(p)
    this.dialog.open(DialogEditProductComponent,{
      width:'80%',
      data:p
    }).afterClosed().subscribe((response)=>{
      if (response){
        this.GetListProduct()
      }
    });
  }

  search() {
    // @ts-ignore
    var name = document.forms["searchproduct"]["name"].value
    this.api.Searchproduct(name).subscribe(res=>{
      this.dataSource = res
    })
  }
}
