import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TestQuestion } from '../../model/test-question.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class TestQuestionService {
  testQuestionChanged = new Subject<TestQuestion[]>();
  // startedEditing = new Subject<number>();
  questionNumber = 0;
  editTestMode = false;
  editedTest: TestQuestion;
  editTestIndex: number;
  deleteTestIndex: number;
  deleteTestMode: boolean;

  private allQuestions: TestQuestion[] = [
    new TestQuestion(
      'What is the Capital of India?',
      'Kolkata',
      'Chennai',
      'New Delhi',
      'Mumbai' ,
      'C'
    ),
    new TestQuestion(
      'Sun rises from the _____ ?',
      'East',
      'West',
      'North',
      'South' ,
      'A'
    )
  ];

  constructor(
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar
  ) {}

  getTestQuestion() {
    return this.allQuestions.slice();
  }
  getEachTestQuestion(index: number){
    return this.allQuestions[index];
  }

  // tslint:disable-next-line: no-shadowed-variable
  addTestQuestion(testQuestion: TestQuestion) {
    this.allQuestions.push(testQuestion);
    this.testQuestionChanged.next(this.allQuestions.slice());
    if (this.editTestMode) {
      this.editedTest = {
        question: '',
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
        correct: ''
      };
      this.editTestMode = false;
    }
    this.editTestMode = false;
    this.openSnackBar('Test Card was Created', 'okay');
  }

  editTest(index: number) {
    this.editTestMode = true;
    this.editedTest = this.allQuestions[index];
    this.editTestIndex = index;
  }

  updateTestQuestion(index: number, editTestQuestion: TestQuestion) {
    this.allQuestions[index] = editTestQuestion;
    this.testQuestionChanged.next(this.allQuestions.slice());
    this.editTestMode = false;
    this.openSnackBar('Test Card was Updated', 'okay');
  }
  deleteTestQuestion(index: number) {
    this.allQuestions.splice(index, 1);
    this.testQuestionChanged.next(this.allQuestions.slice());
    this.deleteTestMode = false;
    this.openSnackBar('Test card was Deleted!', 'okay');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
