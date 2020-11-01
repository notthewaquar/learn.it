import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TestInfoList } from '../../model/test-info.model';
import { TestQuestion } from '../../model/test-question.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class TestInfoService {
  testInfoListChanged = new Subject<TestInfoList[]>();
  previewIndex: number = null;
  giveTestIndex: number = null;
  deleteEachTestInfoIndex: number;
  deleteEachTestInfoMode: boolean;

  private testInfoList: TestInfoList[] = [
    new TestInfoList(
      8,
      'History',
      25,
      1,
      '20:20:2020',
      '09:00',
      '10:00',
      [
        new TestQuestion(
          'What is the Capital of India?',
          'Kolkata',
          'Chennai',
          'New Delhi',
          'Mumbai' ,
          'C'
        ),
        new TestQuestion(
          'Where does the sun rise?',
          'east',
          'west',
          'south',
          'north' ,
          'A'
        ),
        new TestQuestion(
          'Best anime series?',
          'One Punch man',
          'FMA',
          'Naruto',
          'Bleach' ,
          'B'
        ),
      ]
    )
  ];
  constructor(
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar
  ) {}
  getAllTestInfoList(){
    return this.testInfoList.slice();
  }
  getEachTestInfoList(index: number){
    return this.testInfoList[index];
  }
  addTestQuestion(testInfoList: TestInfoList) {
    this.testInfoList.push(testInfoList);
    this.testInfoListChanged.next(this.testInfoList.slice());
  }
  deleteEachTestInfoList(index: number){
    this.testInfoList.splice(index, 1);
    this.testInfoListChanged.next(this.testInfoList.slice());
    this.openSnackBar('Test card was Deleted!', 'okay');
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
