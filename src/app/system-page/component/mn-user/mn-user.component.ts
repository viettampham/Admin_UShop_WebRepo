import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddUserComponent} from "../../Dialog/dialog-add-user/dialog-add-user.component";
import {ApiService} from "../../../login/Services/api.service";
import {UserResponse} from "../../../Models/ViewModels/UserResponse";
import {DialogEditUserComponent} from "../../Dialog/dialog-edit-user/dialog-edit-user.component";

@Component({
  selector: 'app-mn-user',
  templateUrl: './mn-user.component.html',
  styleUrls: ['./mn-user.component.scss']
})
export class MnUserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'name', 'address', 'action'];
  dataSource = new MatTableDataSource<UserResponse>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  user: UserResponse[]=[];

  constructor(private dialog:MatDialog,
              private apiService:ApiService) { }



  ngOnInit(): void {
    this.getUser();

  }

  getUser(){
    this.apiService.GetListUser().subscribe({next:(res)=>{
        this.user=res;
        this.dataSource=new MatTableDataSource(this.user);
        this.dataSource.paginator=this.paginator;
        /*console.log(this.user)*/
      },error:err => {
        alert("Error get list user")
      }
    })
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  deleteUser(id:string) {
    if (confirm("Are you sure delete this user")){
      this.apiService.DeleteUser(id).subscribe(res=>{
        alert("Success")
        this.getUser()
      },error => {
        alert("This user not exist")
      })
    }
  }

  ODeditUser(user:UserResponse) {
    this.dialog.open(DialogEditUserComponent,{
      data:user
    })
  }
}
