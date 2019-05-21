import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  roles = ['USER', 'ADMIN'];

  ngOnInit() {
  }

  registerStd(regForm){
    console.log("regForm is submitted.."+regForm.value)
  }
}
