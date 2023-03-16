import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ApiService} from "../../../login/Services/api.service";

@Component({
  selector: 'app-dialog-view-bill',
  templateUrl: './dialog-view-bill.component.html',
  styleUrls: ['./dialog-view-bill.component.scss']
})
export class DialogViewBillComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private api:ApiService) { }

  status = '';
  colorNitice = "#dfe6e9";
  ngOnInit(): void {
    if (this.data.isPayed == true){
      this.status = "Đã thanh toán";
      this.colorNitice = "#55efc4"
    }
    else {
      this.status = "Chưa thanh toán"
      this.colorNitice = "#ff7675"
    }
  }

  confirmBill(billID: any) {
    this.api.ConfirmBill(billID).subscribe(res=>{
      alert("Success")
      location.reload()
    },error => alert("error"))
  }
}
