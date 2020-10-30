import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestInfoList } from 'src/app/shared/model/test-info.model';
import { TestQuestionService } from 'src/app/shared/service/all-test/test-question.service';
import { TestInfoService } from 'src/app/shared/service/all-test/test-info.service';

@Component({
  selector: 'app-preview-test',
  templateUrl: './preview-test.component.html',
  styleUrls: ['./preview-test.component.css']
})
export class PreviewTestComponent implements OnInit {
  testInfoList: TestInfoList;
  previewMode = true;

  constructor(
    private router: Router,
    private testQuestionService: TestQuestionService,
    private testInfoService: TestInfoService
  ) { }

  ngOnInit(): void {
    const previewIndex = this.testInfoService.previewIndex;
    if (previewIndex === null) {
      this.previewMode = false;
    } else {
      this.testInfoList = this.testInfoService.getEachTestInfoList(previewIndex);
    }
  }

  goBack() {
    this.router.navigate(['teacher/upcoming-test']);
  }
}
