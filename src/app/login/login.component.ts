import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "./Services/api.service";
import {LoginRequest} from "../Models/RequestModels/LoginRequest";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm = this.fb.group({
    username:[''],
    password:['']
  });
  NameDisplay = '';

  constructor(private fb:FormBuilder,private route:Router,
              private apiService:ApiService,
              private jwtHelperService: JwtHelperService) { }

  ngOnInit(): void {
  }


  submit() {
    this.apiService.Login(this.LoginForm.value as LoginRequest).subscribe(res=>{
      if (res.token!=null){
        localStorage.setItem("token",res?.token);
        this.route.navigate(['system'])
        const tokenObj = this.token();
        // @ts-ignore
        var userID = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
        var displayname = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
        this.NameDisplay = displayname
        console.log(tokenObj)
        console.log(userID)
        console.log(displayname)
      }
    },error => {
      alert("Username or password incorrect")
    })
  }
  public token = () => {
    const token = localStorage.getItem('token') ?? '';
    const objectToken = this.decodeToken(token);
    return objectToken;
  }

  public decodeToken = (rawToken: string) => this.jwtHelperService?.decodeToken(rawToken);
}
