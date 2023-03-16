import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ApiService} from "../../../login/Services/api.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {DialogViewBillComponent} from "../../Dialog/dialog-view-bill/dialog-view-bill.component";

@Component({
  selector: 'app-mn-bill',
  templateUrl: './mn-bill.component.html',
  styleUrls: ['./mn-bill.component.scss']
})
export class MnBillComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['Customer', 'PhoneNumber', 'AddressTranfer', 'TotalBill', 'IsPayed', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private api:ApiService,
              private dialog:MatDialog,) { }

  ngOnInit(): void {
    this.GetBill();
  }

  GetBill(){
    this.api.GetBill().subscribe(res=>{
      this.dataSource = res
      console.log(res)
    })
  }

  viewBill(data:any) {
    this.dialog.open(DialogViewBillComponent,{
      data:data,
      width:"70%"
    })
  }

  DeleteBill(id: any) {
    console.log(id)
  }

  SearchBillByNameCustomer() {
    // @ts-ignore
    var customername = document.forms["searchbill"]['name'].value;
    console.log(customername)
    this.api.SearchBill(customername).subscribe(res=>{
      this.dataSource = res
    })
  }
}
