import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../login/LoginResponse';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Student } from '../student/student';
import { Course } from '../course/course';

@Injectable({
  providedIn: 'root'
})
export class RestApiStudentService {

    // Define API
    apiURL = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
    } 
  
    /**
     * 
     * @param authData 
     */
    studentAuth(authData): Observable<Student>{
      return this.http.post<Student>(this.apiURL + '/api/auth/login', JSON.stringify(authData), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }
    /**
     * 
     * @param authData 
     */
    studentAuthenticate(authData){
      return this.http.post(this.apiURL+ '/api/auth/login', JSON.stringify(authData), this.httpOptions)
      .subscribe(
        (res)=>{
          console.log('success');
          console.log(res);
        },
          err=>{
          console.log(" Error..");
          this.handleError(err);
        } 
      );
      
    }

    /**
     * HttpClient API post() method => Create student
     * @param student 
     */
    createStudent(student): Observable<Student> {
        return this.http.post<Student>(this.apiURL + '/api/auth/student/signup', JSON.stringify(student), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }

    /**
     * HttpClient API get() method => Fetch course list
     */
    getCourses(): Observable<Course> {
      return this.http.get<Course>(this.apiURL + '/api/courses/view')
      .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }

    /**
     * HttpClient API post() method => Create course
     * @param course 
     */
    createCourse(course:Course): Observable<Course> {
      return this.http.post<Course>(this.apiURL + '/api/courses/create', JSON.stringify(course), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    // Error handling 
    handleError(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nName:${error.name}\nOk:${error.ok}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
}
