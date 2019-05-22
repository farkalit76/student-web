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
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { 
    path: 'home', component: HomeComponent,
    children: [
      { path: 'studentlist', component: StudentlistComponent },
      { path: 'courselist', component: CourselistComponent },
      { path: 'student', component: StudentComponent },
      { path: 'course', component: CourseComponent },
      { path: 'logout', component: LogoutComponent}
    ]
  },

  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
