import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { TestInfoService } from '../../service/all-test/test-info.service';
import { TestQuestionService } from '../../service/all-test/test-question.service';
import { AllClassListService } from '../../service/class-list/all-class-list.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  deleteTestMode = false;
  deleteClassMode = false;
  deleteEachTestInfoMode = false;

  constructor(
    private testQuestionService: TestQuestionService,
    private allClassListService: AllClassListService,
    private testInfoService: TestInfoService,
    public dialogRef: MatDialogRef<DeleteModalComponent>
  ) { }

  ngOnInit(): void {
    this.deleteTestMode = this.testQuestionService.deleteTestMode;
    this.deleteClassMode = this.allClassListService.deleteClassMode;
    this.deleteEachTestInfoMode = this.testInfoService.deleteEachTestInfoMode;
  }
  deleteTest() {
    if (this.deleteTestMode) {
      this.deleteTestCard();
    } else if (this.deleteClassMode) {
      this.deleteTestAllClassList();
    } else if (this.deleteEachTestInfoMode) {
      this.deleteEachTestInfo();
    }
    this.onNoClick();
  }
  deleteTestCard() {
    const deleteTestIndex = this.testQuestionService.deleteTestIndex;
    this.testQuestionService.deleteTestQuestion(deleteTestIndex);
    this.testQuestionService.deleteTestMode = false;
  }
  deleteTestAllClassList() {
    const deleteClassIndex = this.allClassListService.deleteTestIndex;
    this.allClassListService.removeClassList(deleteClassIndex);
    this.allClassListService.deleteClassMode = false;
  }
  deleteEachTestInfo() {
    const deleteClassIndex = this.testInfoService.deleteEachTestInfoIndex;
    this.testInfoService.deleteEachTestInfoList(deleteClassIndex);
    this.testInfoService.deleteEachTestInfoMode = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
