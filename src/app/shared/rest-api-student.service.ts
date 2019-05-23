import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../login/LoginResponse';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Student } from '../student/student';
import { Course } from '../course/course';
import { JwtSessionService } from './jwtSessionService';

@Injectable({
  providedIn: 'root'
})
export class RestApiStudentService {

    // Define API
    apiURL = 'http://localhost:8080';

    constructor(private http: HttpClient, public sessionService: JwtSessionService) { 
    }

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
    studentAuth(authData): Observable<LoginResponse>{
      return this.http.post<LoginResponse>(this.apiURL + '/api/auth/login', JSON.stringify(authData), this.httpOptions)
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
      return this.http.post<LoginResponse>(this.apiURL+ '/api/auth/login', JSON.stringify(authData), this.httpOptions)
      .subscribe(
        (res)=>{
          console.log('success');
          console.log(res);
          return res;
        },
          err=>{
          console.log(" Error..");
          this.handleError(err);
        } 
      );
      
    }

     /**
     * HttpClient API get() method => Fetch student list
     */
    getStudents(): Observable<Student>{
      return this.http.get<Student>(this.apiURL + '/api/student/all')
      .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }
    /**
     * HttpClient API post() method => Create student
     * @param student 
     */
    createStudent(student): Observable<Student> {
        var httpTokenOptions = {
          headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Authorization":'Bearer '+ this.sessionService.getAccessToken()
          })
        } 
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
      var httpTokenOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization":'Bearer '+ this.sessionService.getAccessToken()
        })
      } 
      return this.http.get<Course>(this.apiURL + '/api/courses/view', httpTokenOptions)
      .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }

    /**
     * HttpClient API post() method => Create course
     * @param course 
     */
    createCourse(course): Observable<Course> {
     
      var httpTokenOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization":'Bearer '+ this.sessionService.getAccessToken()
        })
      } 
      return this.http.post<Course>(this.apiURL + '/api/courses/create', JSON.stringify(course), httpTokenOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )

    //  this.httpOptions.headers.append("Authorization",'Bearer '+ this.sessionService.getAccessToken());
    //  this.httpOptions.headers.set("Authorization",'Bearer '+ this.sessionService.getAccessToken());
     
    //   return this.http.post<Course>(this.apiURL + '/api/courses/create', JSON.stringify(course), this.httpOptions)
    //   .pipe(
    //     retry(1),
    //     catchError(this.handleError)
    //   )
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
