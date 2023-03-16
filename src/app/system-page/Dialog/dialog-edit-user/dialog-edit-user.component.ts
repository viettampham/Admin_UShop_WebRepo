import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../login/Services/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  dataForm: any;

  constructor(private api:ApiService,
              private fb:FormBuilder,
              private dialogRef:MatDialogRef<DialogEditUserComponent>,
              @Inject(MAT_DIALOG_DATA) public editData:any,) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      id:[''],
      userName:[''],
      name:[''],
      address:[''],
      email:[''],
    })
    if (this.editData){
      this.dataForm.controls['id'].setValue(this.editData.id)
      this.dataForm.controls['userName'].setValue(this.editData.userName)
      this.dataForm.controls['name'].setValue(this.editData.name)
      this.dataForm.controls['address'].setValue(this.editData.address)
      this.dataForm.controls['email'].setValue(this.editData.email)
    }
  }

  HandleEdit() {
    if (this.editData){
      this.api.EditUser(this.dataForm.value).subscribe(res=>{
        alert("Success");
        this.dialogRef.close();
        location.reload()
      })
    }
  }
}
