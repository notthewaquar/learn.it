import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { TestQuestionService } from '../../service/all-test/test-question.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  constructor(
    private testQuestionService: TestQuestionService,
    public dialogRef: MatDialogRef<DeleteModalComponent>
  ) { }

  ngOnInit(): void {
  }
  deleteTest() {
    const deleteTestIndex = this.testQuestionService.deleteTestIndex;
    this.testQuestionService.deleteTestQuestion(deleteTestIndex);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
