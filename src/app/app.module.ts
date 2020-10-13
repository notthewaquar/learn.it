import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material module
import { CustomMaterialModule } from './core/material.module';

// components
import { HomePageComponent } from './home-page/home-page.component';
import { RootNavComponent } from './root-nav/root-nav.component';

// auth
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';

// teacher
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './teacher/dashboard/dashboard.component';
import { UpcomingTestComponent } from './teacher/upcoming-test/upcoming-test.component';
import { CreateTestComponent } from './teacher/create-test/create-test.component';
import { StudentPerformComponent } from './teacher/student-perform/student-perform.component';

// student
import { StudentComponent } from './student/student.component';
import { UpcomingStudentTestComponent } from './student/upcoming-student-test/upcoming-student-test.component';
import { GiveTestComponent } from './student/give-test/give-test.component';
import { CreateClassComponent } from './teacher/create-class/create-class.component';
import { AddEditTestComponent } from './teacher/create-test/add-edit-test/add-edit-test.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// services
import { TestQuestionService } from './shared/service/all-test/test-question.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TeacherComponent,
    StudentComponent,
    AuthComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    UpcomingTestComponent,
    CreateTestComponent,
    StudentPerformComponent,
    RootNavComponent,
    UpcomingStudentTestComponent,
    GiveTestComponent,
    CreateClassComponent,
    AddEditTestComponent,
    LoadingSpinnerComponent
  ],
  entryComponents: [AddEditTestComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    TestQuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
