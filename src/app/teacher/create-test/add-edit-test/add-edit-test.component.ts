import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { TestQuestion } from 'src/app/shared/model/test-question.model';
import { TestQuestionService } from 'src/app/shared/service/all-test/test-question.service';

@Component({
  selector: 'app-add-edit-test',
  templateUrl: './add-edit-test.component.html',
  styleUrls: ['./add-edit-test.component.css']
})
export class AddEditTestComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  testQuestionForm: FormGroup;
  editMode = false;
  editedIndex: number;

  constructor(
    private testQuestionService: TestQuestionService,
    public dialogRef: MatDialogRef<AddEditTestComponent>
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.editMode = this.testQuestionService.editTestMode;
    this.editedIndex = this.testQuestionService.editTestIndex;
  }


  private initForm() {
    let question = '';
    let ans1 = '';
    let ans2 = '';
    let ans3 = '';
    let ans4 = '';
    let correct = '';

    if (this.testQuestionService.editTestMode) {
      question = this.testQuestionService.editedTest.question;
      ans1 = this.testQuestionService.editedTest.ans1;
      ans2 = this.testQuestionService.editedTest.ans2;
      ans3 = this.testQuestionService.editedTest.ans3;
      ans4 = this.testQuestionService.editedTest.ans4;
      correct = this.testQuestionService.editedTest.correct;
    }
    this.testQuestionForm = new FormGroup({
      makeQuestion: new FormControl(question, Validators.required),
      makeAns1: new FormControl(ans1, Validators.required),
      makeAns2: new FormControl(ans2, Validators.required),
      makeAns3: new FormControl(ans3, Validators.required),
      makeAns4: new FormControl(ans4, Validators.required),
      selectAnswer: new FormControl(correct, Validators.required)
    });
  }

  onSubmit(){
    const question = this.testQuestionForm.get('makeQuestion').value;
    const ans1 = this.testQuestionForm.get('makeAns1').value;
    const ans2 = this.testQuestionForm.get('makeAns2').value;
    const ans3 = this.testQuestionForm.get('makeAns3').value;
    const ans4 = this.testQuestionForm.get('makeAns4').value;
    const selectAnswer = this.testQuestionForm.get('selectAnswer').value;
    const newQuestion = new TestQuestion(
      question,
      ans1,
      ans2,
      ans3,
      ans4,
      selectAnswer
    );
    if (!this.editMode) {
      this.testQuestionService.addTestQuestion(newQuestion);
    } else if (this.editMode) {
      this.testQuestionService.updateTestQuestion(this.editedIndex, newQuestion);
    }
    this.testQuestionForm.reset();
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  resetForm() {
    this.testQuestionForm.reset();
    this.testQuestionService.editTestMode = false;
  }
  closeModal() {
    this.testQuestionService.editTestMode = false;
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
