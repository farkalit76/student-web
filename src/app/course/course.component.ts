import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestApiStudentService } from '../shared/rest-api-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl()
 });

  constructor(public restApi: RestApiStudentService, 
    public router: Router) {
  }

  ngOnInit() {
  }

  courseSave(){

    console.log("login submit started..."+this.courseForm.value.name);
    var courseData = {
      "name": this.courseForm.value.name,
      "description": this.courseForm.value.description,
      "price": this.courseForm.value.price
    }
    
    this.restApi.createCourse(courseData).subscribe((data: {}) => {
      console.log('course data:'+data);
      this.router.navigate(['/courselist'])
    })
  }
}
