import { Component, OnInit } from '@angular/core';
import { RestApiStudentService } from '../shared/rest-api-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  studentlist: any;
  constructor(public restApi: RestApiStudentService, 
    public router: Router) { }

  ngOnInit() {
      console.log('student list loading...');
      this.restApi.getStudents().subscribe((data: {}) => {
        //console.log('display all students:'+data);
        this.studentlist = data;
      })
  }

}
