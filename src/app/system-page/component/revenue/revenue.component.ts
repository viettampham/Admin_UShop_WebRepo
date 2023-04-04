import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../login/Services/api.service";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {
  selected = new FormControl('', [Validators.required, Validators.pattern('')]);
  selectFormControl = new FormControl('', [Validators.required, Validators.pattern('')]);

  nativeSelectFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(''),
  ]);
  matcher = new MyErrorStateMatcher();
  listYearDb: any;

  constructor(private api:ApiService) { }
  data:any;
  months = [1,2,3,4,5,6,7,8,9,10,11,12];
  years = [2020,2021,2022,2023];
  month:any
  year: any;
  ngOnInit(): void {
    this.getRevenue();
    this.GetYearDb();
  }
  getRevenue() {
    this.api.GetRevenue().subscribe(res => {
      this.data = res
      //console.log(this.data)
    })
  }


  GetMonth(x: number) {
    this.month = x
  }

  GetYear(y: number) {
    this.year = y;
  }

  GetRevenueMonth() {
    this.api.GetRevenueMonth(this.month,this.year).subscribe(res=>{
      if (res){
        this.data = res.revenueResponse
        //console.log(this.data)
      }
    },error => {
      alert("Không tìm thấy đơn hàng nào trong tháng " +this.month + "năm " + this.year)
    })

  }

  GetYearDb(){
    this.api.GetYearinDB().subscribe(res=>{
      this.listYearDb = res
      //console.log(this.listYearDb)
    })
  }

  ratioJan:any;
  ratioFeb:any;
  ratioMar:any;
  ratioApr:any;
  ratioMay:any;
  ratioJun:any;
  ratioJul:any;
  ratioAug:any;
  ratioSep:any;
  ratioOct:any;
  ratioNov:any;
  ratioDec:any;
  Jan:any;
  Feb:any;
  Mar:any;
  Apr:any;
  May:any;
  Jun:any;
  Jul:any;
  Aug:any;
  Sep:any;
  Oct:any;
  Nov:any;
  Dec:any;

  GetRatioYear(y: any) {
    this.api.GetRatioRevenue(y).subscribe(res=>{
      this.ratioJan = res.ratioJan
      this.ratioFeb = res.ratioFeb
      this.ratioMar = res.ratioMar
      this.ratioApr = res.ratioApr
      this.ratioMay = res.ratioMay
      this.ratioJun = res.ratioJun
      this.ratioJul = res.ratioJul
      this.ratioAug = res.ratioAug
      this.ratioSep = res.ratioSep
      this.ratioOct = res.ratioOct
      this.ratioNov = res.ratioNov
      this.ratioDec = res.ratioDec
      this.Jan = res.jan
      this.Feb = res.feb
      this.Mar = res.mar
      this.Apr = res.apr
      this.May = res.may
      this.Jun = res.jun
      this.Jul = res.jul
      this.Aug = res.aug
      this.Sep = res.sep
      this.Oct = res.oct
      this.Nov = res.nov
      this.Dec = res.dec

    })
  }
}
