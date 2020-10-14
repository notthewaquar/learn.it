import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { TestQuestion } from 'src/app/shared/model/test-question.model';
import { TestQuestionService } from 'src/app/shared/service/all-test/test-question.service';
// modal
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

import { AddEditTestComponent } from './add-edit-test/add-edit-test.component';
import { DeleteModalComponent } from 'src/app/shared/modal/delete-modal/delete-modal.component';


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

  constructor(
    private testQuestionService: TestQuestionService,
    private dialog: MatDialog,
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar
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
        testDate: new FormControl(null, Validators.required),
        startTestTime: new FormControl('09:00', Validators.required),
        endTestTime: new FormControl('10:00', Validators.required)
      })
    });
  }

  onSubmit(){
    console.log(this.testAllForm.value);
    console.log(this.testQuestionService.getTestQuestion());
  }

  addEditModal() {
    this.dialog.open(AddEditTestComponent, { disableClose: true });
  }

  deleteModal(index: number) {
    this.dialog.open(DeleteModalComponent);
    this.testQuestionService.deleteTestIndex = index;
  }

  editEachQuestion(index: number){
    // this.testQuestionService.startedEditing.next(index);
    this.dialog.open(AddEditTestComponent);
    this.testQuestionService.editTest(index);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnDestroy() {
  //
  }
}
