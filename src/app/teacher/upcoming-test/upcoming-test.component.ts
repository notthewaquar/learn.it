import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';

import { TestInfoList } from 'src/app/shared/model/test-info.model';
import { TestInfoService } from 'src/app/shared/service/all-test/test-info.service';
import { DeleteModalComponent } from 'src/app/shared/modal/delete-modal/delete-modal.component';

@Component({
  selector: 'app-upcoming-test',
  templateUrl: './upcoming-test.component.html',
  styleUrls: ['./upcoming-test.component.css']
})
export class UpcomingTestComponent implements OnInit {
  testInfoList: TestInfoList[];
  private upcomingTestSub: Subscription;

  constructor(
    private testInfoService: TestInfoService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.testInfoList = this.testInfoService.getAllTestInfoList();
    this.upcomingTestSub = this.testInfoService.testInfoListChanged
      .subscribe(
        (testInfoList: TestInfoList[]) => {
          this.testInfoList = testInfoList;
        }
    );

  }

  viewTestInfo(index: number){
    console.log(index);
    this.testInfoService.previewIndex = index;
    this.router.navigate(['teacher/preview-test']);
  }
  deleteTestInfo(index: number){
    this.dialog.open(DeleteModalComponent);
    this.testInfoService.deleteEachTestInfoIndex = index;
    this.testInfoService.deleteEachTestInfoMode = true;
    // this.testInfoService.deleteEachTestInfoList(index);
  }
}
