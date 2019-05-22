import { Component, OnInit } from '@angular/core';
import { RestApiStudentService } from '../shared/rest-api-student.service';
import { Router } from '@angular/router';

import { Course } from '../course/course';
import * as jsPDF from 'jspdf';
// import * as autoTable from 'jspdf-autotable';
import { autoTable } from 'jspdf-autotable'; 
import 'jspdf-autotable';


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
      this.restApi.getCourses().subscribe((data: Course) => {
        console.log('display all cources'+data);
        this.courselist = data;
      })
  }

  /**
   * npm install jspdf --save
   * npm install @types/jspdf --save
   * npm install jspdf-autotable --save
   */
  downloadPDF(){

    const doc:any = new jsPDF();
    //doc.text(JSON.stringify(this.courselist), 10, 10);
    //doc.fromHTML(this.getCoursesData(), 10, 10);
    const header = [['Student Courses']];
    const col = [['ID', 'Name', 'Description', 'Price']];
    const rows = [];
    /* The following array of object as response from the API req  */
    this.courselist.forEach(course => {
      // tslint:disable-next-line:max-line-length
      const temp = [course.courseId, course.name, course.description, course.price];
      rows.push(temp);
    });

    doc.autoTable({head: col, body: rows});
    doc.save('courses.pdf');
  }

  downloadPDF2() {
    
    var head = [["ID", "Country", "Rank", "Capital"]];
    var body = [
        [1, "Denmark", 7.526, "Copenhagen"],
        [2, "Switzerland", 	7.509, "Bern"],
        [3, "Iceland", 7.501, "Reykjavík"],
        [4, "Norway", 7.498, "Oslo"],
        [5, "Finland", 7.413, "Helsinki"]
    ];

    //const doc = new jsPDF('landscape', 'pt', 'a4');
    //const doc = new jsPDF();
    let doc: any = new jsPDF();
    doc.autoTable({head: head, body: body});
    doc.output("dataurlnewwindow");
  }
}
