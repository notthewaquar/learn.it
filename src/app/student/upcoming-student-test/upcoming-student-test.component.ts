import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { TestInfoList } from 'src/app/shared/model/test-info.model';
import { TestInfoService } from 'src/app/shared/service/all-test/test-info.service';

@Component({
  selector: 'app-upcoming-student-test',
  templateUrl: './upcoming-student-test.component.html',
  styleUrls: ['./upcoming-student-test.component.css']
})
export class UpcomingStudentTestComponent implements OnInit {
  testInfoList: TestInfoList[];
  private upcomingTestSub: Subscription;

  constructor(
    private testInfoService: TestInfoService,
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
    this.testInfoService.giveTestIndex = index;
    this.router.navigate(['student/give-test']);
  }

}
