import { Subject } from 'rxjs';

import { TestInfoList } from '../../model/test-info.model';
import { TestQuestion } from '../../model/test-question.model';

export class TestInfoService {
  testInfoListChanged = new Subject<TestInfoList[]>();
  previewIndex: number = null;
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
      ]
    )
  ];
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
  }
}
