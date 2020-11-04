import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// auth
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';

// all
import { HomePageComponent } from './home-page/home-page.component';

// teacher
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './teacher/dashboard/dashboard.component';
import { StudentPerformComponent } from './teacher/student-perform/student-perform.component';
import { UpcomingTestComponent } from './teacher/upcoming-test/upcoming-test.component';
import { CreateTestComponent } from './teacher/create-test/create-test.component';
import { CreateClassComponent } from './teacher/class-list/create-class/create-class.component';
import { ClassListComponent } from './teacher/class-list/class-list.component';

// student
import { StudentComponent } from './student/student.component';
import { PreviewTestComponent } from './teacher/upcoming-test/preview-test/preview-test.component';
import { GiveTestComponent } from './student/give-test/give-test.component';
import { UpcomingStudentTestComponent } from './student/upcoming-student-test/upcoming-student-test.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentSubmitTestComponent } from './student/give-test/student-submit-test/student-submit-test.component';

const routes: Routes = [
  { path: '', component: AuthComponent, pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'account', component: AuthComponent },
  { path: 'teacher',
    component: TeacherComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'upcoming-test', component: UpcomingTestComponent },
      { path: 'preview-test', component: PreviewTestComponent },
      { path: 'create-test', component: CreateTestComponent },
      { path: 'student-performance', component: StudentPerformComponent },
      { path: 'create-class', component: CreateClassComponent },
      { path: 'class-list', component: ClassListComponent }
    ]
  },
  { path: 'student',
    component: StudentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: StudentDashboardComponent },
      { path: 'upcoming-test', component: UpcomingStudentTestComponent },
      { path: 'give-test', component: GiveTestComponent },
      { path: 'submit-test', component: StudentSubmitTestComponent }
    ]
  },
  { path: 'sign-up', component: SignUpComponent }
  // ,
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
