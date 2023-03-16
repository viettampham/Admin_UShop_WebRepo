import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../../../login/Services/api.service";
import {RegistrationRequest} from "../../../Models/RequestModels/RegistrationRequest";
import {Router} from "@angular/router";
import {DialogRef} from "@angular/cdk/dialog";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  FormSignUp = this.fb.group({
    userName:[''],
    name:[''],
    address:[''],
    passWord:['']
  });

  constructor(private fb :FormBuilder,
              private apiService:ApiService,
              private route:Router,
              private matDialogRef:MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {

  }

  submit() {
      this.apiService.Registration(this.FormSignUp.value as RegistrationRequest).subscribe(res=>{
        this.matDialogRef.close();
        alert("Success");
        location.reload()
      })
    }
  }
