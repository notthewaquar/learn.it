import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { CreateClassComponent } from './teacher/class-list/create-class/create-class.component';

// student
import { StudentComponent } from './student/student.component';
import { UpcomingStudentTestComponent } from './student/upcoming-student-test/upcoming-student-test.component';
import { GiveTestComponent } from './student/give-test/give-test.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { AddEditTestComponent } from './teacher/create-test/add-edit-test/add-edit-test.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// services
import { DeleteModalComponent } from './shared/modal/delete-modal/delete-modal.component';
import { TestQuestionService } from './shared/service/all-test/test-question.service';
import { TestInfoService } from './shared/service/all-test/test-info.service';
import { ClassListService } from './shared/service/class-list/class-list.service';
import { ClassListComponent } from './teacher/class-list/class-list.component';
import { AllClassListService } from './shared/service/class-list/all-class-list.service';
import { PreviewTestComponent } from './teacher/upcoming-test/preview-test/preview-test.component';
import { StudentSubmitTestComponent } from './student/give-test/student-submit-test/student-submit-test.component';

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
    LoadingSpinnerComponent,
    DeleteModalComponent,
    ClassListComponent,
    PreviewTestComponent,
    StudentDashboardComponent,
    StudentSubmitTestComponent
  ],
  entryComponents: [AddEditTestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    TestQuestionService,
    TestInfoService,
    ClassListService,
    AllClassListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
