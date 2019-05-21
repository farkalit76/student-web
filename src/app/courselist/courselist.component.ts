import { Component, OnInit } from '@angular/core';
import { RestApiStudentService } from '../shared/rest-api-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  courselist: any;
  constructor(public restApi: RestApiStudentService, 
    public router: Router) { }

  ngOnInit() {
      console.log('course list loading...');
      this.restApi.getCourses().subscribe((data: {}) => {
        console.log('display all cources'+data);
        this.courselist = data;
      })
  }

}
