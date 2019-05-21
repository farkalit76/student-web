import { Component, OnInit } from '@angular/core';
import { RestApiStudentService } from '../shared/rest-api-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public restApi: RestApiStudentService,  
    public router: Router,) { }

  ngOnInit() {
    console.log("logout completed.");
    this.router.navigate(['/login']);
  }

}
