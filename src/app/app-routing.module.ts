import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent }      from './student/student.component';
import { CourseComponent }      from './course/course.component';
import { LoginComponent }      from './login/login.component';
import { HomeComponent }      from './home/home.component';
import { CourselistComponent } from './courselist/courselist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'student', component: StudentComponent },
  { path: 'studentlist', component: StudentlistComponent },
  { path: 'course', component: CourseComponent },
  { path: 'courselist', component: CourselistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
