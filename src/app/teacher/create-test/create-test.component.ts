import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TestQuestion } from 'src/app/shared/model/test-question.model';
import { TestQuestionService } from 'src/app/shared/service/all-test/test-question.service';
// modal
import {MatDialog} from '@angular/material/dialog';

import { AddEditTestComponent } from './add-edit-test/add-edit-test.component';
import { DeleteModalComponent } from 'src/app/shared/modal/delete-modal/delete-modal.component';
import { TestInfoService } from 'src/app/shared/service/all-test/test-info.service';
import { TestInfoList } from 'src/app/shared/model/test-info.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit, OnDestroy {
  id: number;
  allQuestions: TestQuestion[];
  // testQuestionForm: FormGroup;
  testAllForm: FormGroup;
  private testQuestionSub: Subscription;
  // modal
  panelOpenState = false;
  testDataArr = [];

  constructor(
    private testQuestionService: TestQuestionService,
    private testInfoService: TestInfoService,
    private dialog: MatDialog,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initTestForm();
    this.allQuestions = this.testQuestionService.getTestQuestion();
    this.testQuestionSub = this.testQuestionService.testQuestionChanged
      .subscribe(
        (allQuestions: TestQuestion[]) => {
          this.allQuestions = allQuestions;
        }
    );
  }

  private initTestForm() {
    this.testAllForm = new FormGroup({
      classInfo: new FormGroup({
        selectClass: new FormControl(null, Validators.required),
        selectSubject: new FormControl(null, Validators.required),
        noOfQues: new FormControl('1', Validators.required),
        quesMark: new FormControl('1', Validators.required)
      }),
      dateTime: new FormGroup({
        testDate: new FormControl(new Date(), Validators.required),
        startTestTime: new FormControl('09:00', Validators.required),
        endTestTime: new FormControl('10:00', Validators.required)
      })
    });
  }
  testGroupData() {
    this.testDataArr = [
      this.testAllForm.value,
      this.testQuestionService.getTestQuestion()
    ];
    console.log(this.testDataArr);
  }

  onSubmit(){
    // this.testGroupData();
    // this.http.post<{name: string}>(
    //   'https://ng-complete-guide-63c17.firebaseio.com/testData.json',
    //   this.testDataArr
    // ).subscribe(testRespData => {
    //   console.log(testRespData);
    // });
    const newData = new TestInfoList(
      this.testAllForm.value.classInfo.selectClass,
      this.testAllForm.value.classInfo.selectSubject,
      this.testAllForm.value.classInfo.noOfQues,
      this.testAllForm.value.classInfo.quesMark,
      this.testAllForm.value.dateTime.testDate,
      this.testAllForm.value.dateTime.startTestTime,
      this.testAllForm.value.dateTime.endTestTime,
      this.allQuestions
    );
    console.log(newData);
    this.testInfoService.addTestQuestion(newData);
    this.router.navigate(['teacher/upcoming-test']);

    this.testQuestionService.openSnackBar('New Test created!', 'okay');
  }

  addEditModal() {
    this.dialog.open(AddEditTestComponent, { disableClose: true });
  }

  deleteModal(index: number) {
    this.dialog.open(DeleteModalComponent);
    this.testQuestionService.deleteTestIndex = index;
    this.testQuestionService.deleteTestMode = true;
  }

  editEachQuestion(index: number){
    // this.testQuestionService.startedEditing.next(index);
    this.dialog.open(AddEditTestComponent);
    this.testQuestionService.editTest(index);
  }
  addTestInfo() {
    //
  }
  ngOnDestroy() {
  //
  }
}
