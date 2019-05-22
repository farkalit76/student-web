import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from './loginResponse';
import { RestApiStudentService } from '../shared/rest-api-student.service';
import { JwtSessionService } from '../shared/jwtSessionService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
  apiUrl = "http://localhost:8080/api/auth/login";

  loginRes =new LoginResponse();

  loginForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
 });

  constructor(public restApi: RestApiStudentService,  
    public router: Router, public sessionService: JwtSessionService) {
  }

  ngOnInit() {
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }  
    
  loginSubmit(){
    let user= this.loginForm.value.username;
    console.log("login submit started..."+this.loginForm.value.email);
    if( user == null || user == '' ){
      user = this.loginForm.value.email;
    }
    var authData = {
      "usernameOrEmail": user,
      "password": this.loginForm.value.password
    }
    
    this.restApi.studentAuth(authData).subscribe((data: LoginResponse) => {
      console.log('auth student data:'+data);
      this.sessionService.setAccessToken(data);
      //localStorage.setItem("ACCESS_TOKEN", data.accessToken);
      //this.router.navigate(['/courselist'])
      this.router.navigate(['/home']);
    })
  }

  
}
