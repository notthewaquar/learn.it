import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  testQuestionForm: FormGroup;
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
    this.allQuestions = this.testQuestionService.getTestQuestion();
    this.testQuestionSub = this.testQuestionService.testQuestionChanged
      .subscribe(
        (allQuestions: TestQuestion[]) => {
          this.allQuestions = allQuestions;
        }
    );
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
