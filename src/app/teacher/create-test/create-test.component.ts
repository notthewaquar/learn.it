import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { TestQuestion } from 'src/app/shared/model/test-question.model';
import { TestQuestionService } from 'src/app/shared/service/all-test/test-question.service';
// modal
import {MatDialog} from '@angular/material/dialog';
import { AddEditTestComponent } from './add-edit-test/add-edit-test.component';


@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit, OnDestroy {
  id: number;
  allQuestions: TestQuestion[];
  testQuestionForm: FormGroup;
  private testQuestionSub: Subscription;
  // modal
  panelOpenState = false;

  constructor(
    private testQuestionService: TestQuestionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.allQuestions = this.testQuestionService.getTestQuestion();
    this.testQuestionSub = this.testQuestionService.testQuestionChanged
      .subscribe(
        (allQuestions: TestQuestion[]) => {
          this.allQuestions = allQuestions;
        }
    );
  }

  openDialog() {
    this.dialog.open(AddEditTestComponent, { disableClose: true });
  }

  editEachQuestion(index: number){
    // this.testQuestionService.startedEditing.next(index);
    this.testQuestionService.editTest(index);
  }

  ngOnDestroy() {
  //
  }
}
