import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// auth
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

// all
import { HomePageComponent } from './home-page/home-page.component';

// teacher
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './teacher/dashboard/dashboard.component';
import { StudentPerformComponent } from './teacher/student-perform/student-perform.component';
import { UpcomingTestComponent } from './teacher/upcoming-test/upcoming-test.component';
import { CreateTestComponent } from './teacher/create-test/create-test.component';
import { CreateClassComponent } from './teacher/create-class/create-class.component';
import { ClassListComponent } from './teacher/class-list/class-list.component';

// student
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', component: AuthComponent, pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'account', component: AuthComponent },
  { path: 'teacher', component: TeacherComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'upcoming-test', component: UpcomingTestComponent },
    { path: 'create-test', component: CreateTestComponent },
    { path: 'student-performance', component: StudentPerformComponent },
    { path: 'create-class', component: CreateClassComponent },
    { path: 'class-list', component: ClassListComponent }
  ] },
  // { path: 'teacher/upcoming-test', component: UpcomingTestComponent},
  // { path: 'teacher/create-test', component: CreateTestComponent},
  // { path: 'teacher/student-performance', component: StudentPerformComponent},
  { path: 'student', component: StudentComponent },
  { path: 'sign-up', component: SignUpComponent }
  // ,
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
