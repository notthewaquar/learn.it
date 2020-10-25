import { Subject } from 'rxjs';

import { ClassList } from '../../model/class-list.model';
import { Injectable } from '@angular/core';
import { AllClassList } from '../../model/all-class-list.model';
import { AllClassListService } from './all-class-list.service';

@Injectable()
export class ClassListService {
  newFieldChanged = new Subject<ClassList[]>();

  private allClassList: ClassList[] = [
    // new ClassList(
    //   '',
    //   '',
    //   ''
    // )
  ];
  constructor(
    private allClassListService: AllClassListService
  ) {}

  getClassList(){
    return this.allClassList.slice();
  }
  getEachClassList(index: number){
    return this.allClassList[index];
  }
  addClassList(classList: ClassList) {
    this.allClassList.push(classList);
  }
  addNewField(newField: ClassList){
    this.allClassList.push(newField);
    this.newFieldChanged.next(this.allClassList.slice());
  }
  removeClassStudent(index: number){
    this.allClassList.splice(index, 1);
    this.newFieldChanged.next(this.allClassList.slice());
  }
  resetAddClassList(){
    this.allClassList = [];
    this.newFieldChanged.next(this.allClassList.slice());
  }
  addNewCLassList(classNum: string) {
    console.log(classNum);
  }
  addClassListToAllClassList(classNum: string){
    const newClass1 = new AllClassList(
      classNum,
      this.allClassList
    );
    this.allClassListService.addFromClassListToAllClassList(newClass1);
  }
}
