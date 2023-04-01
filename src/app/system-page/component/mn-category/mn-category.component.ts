import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ApiService} from "../../../login/Services/api.service";
import {Product} from "../../../Models/Product";
import {Category} from "../../../Models/ViewModels/Category";
import {MatDialog} from "@angular/material/dialog";
import {DialogEditCategoryComponent} from "../../Dialog/dialog-edit-category/dialog-edit-category.component";
import {DialogAddCategoryComponent} from "../../Dialog/dialog-add-category/dialog-add-category.component";

@Component({
  selector: 'app-mn-category',
  templateUrl: './mn-category.component.html',
  styleUrls: ['./mn-category.component.scss']
})
export class MnCategoryComponent implements OnInit {

  constructor(private api: ApiService,
              private dialog:MatDialog) {
  }

  ListCategory: Category[] = [];
  displayedColumns: string[] = ['id', 'title', 'action'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.GetCategory();
  }

  GetCategory() {
    this.api.GetListCategory().subscribe(res => {
      // @ts-ignore
      this.ListCategory = res
      this.dataSource = new MatTableDataSource<Category>(this.ListCategory)
      this.dataSource.paginator = this.paginator;

      //console.log(this.ListCategory)
    })
  }

  DeleteCategory(id:string) {
    if (confirm("Do you sure ?")){
      // @ts-ignore
      this.api.DeleteCategory(id).subscribe(res=>{
        alert("Success")
        location.reload()
      })
    }
  }


  handleEdit(c:Category) {
    this.dialog.open(DialogEditCategoryComponent,{
      data:c
    })
  }

  ODACategory() {
    this.dialog.open(DialogAddCategoryComponent,{
      width:'40%',
    })
  }
}
