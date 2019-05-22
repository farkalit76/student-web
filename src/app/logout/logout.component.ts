import { Component, OnInit } from '@angular/core';
import { RestApiStudentService } from '../shared/rest-api-student.service';
import { Router } from '@angular/router';
import { JwtSessionService } from '../shared/jwtSessionService';
import { LoginResponse } from '../login/loginResponse';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public restApi: RestApiStudentService,  
    public router: Router, private sessionService: JwtSessionService) { }

  ngOnInit() {
    console.log("clean the session before logout completed.");
    this.sessionService.setAccessToken(new LoginResponse());
    console.log("token value after:"+this.sessionService.getAccessToken());
    this.router.navigate(['../login']);
  }

}
