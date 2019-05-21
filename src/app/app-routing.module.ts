import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent }      from './student/student.component';
import { CourseComponent }      from './course/course.component';
import { LoginComponent }      from './login/login.component';
import { HomeComponent }      from './home/home.component';
import { CourselistComponent } from './courselist/courselist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentComponent },
  { path: 'course', component: CourseComponent },
  { path: 'courselist', component: CourselistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
