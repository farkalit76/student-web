import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute ){}

  ngOnInit() {
    
  }

  homePage(){
    this.router.navigate(['../home'], {relativeTo: this.route});
  }

  showCourseList(){
    this.router.navigate(['courselist'], {relativeTo: this.route});
  }

  showStudentList(){
    this.router.navigate(['studentlist'], {relativeTo: this.route});
  }

  createStudent(){
    this.router.navigate(['student'], {relativeTo: this.route});
  }

  createCourse(){
    this.router.navigate(['course'], {relativeTo: this.route});
  }

  logoutPage(){
    this.router.navigate(['logout'], {relativeTo: this.route});
  }
}
