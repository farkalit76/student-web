import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestApiStudentService } from '../shared/rest-api-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  roles = ['USER', 'ADMIN'];

  studentForm = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  })

  constructor(public restApi: RestApiStudentService,  
    public router: Router) { }
  
  ngOnInit() {
  }

  createStudent(){
    console.log("regForm is submitted.."+this.studentForm.value.name);

    if( this.studentForm.value.password != this.studentForm.value.confirmPassword)
    {
      alert('Please enter valid confirm password.')
      return;
    }
    var studentData = {
      "name": this.studentForm.value.name,
      "username": this.studentForm.value.username,
      "email": this.studentForm.value.email,
      "password": this.studentForm.value.password
    }
    
    this.restApi.createStudent(studentData).subscribe((data: {}) => {
      console.log('student saved data:'+data);
      //localStorage.setItem("ACCESS_TOKEN", data.accessToken);
      this.router.navigate(['/courselist'])
    })
  }
}
