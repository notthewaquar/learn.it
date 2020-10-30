import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AllClassList } from '../../model/all-class-list.model';
import { ClassList } from '../../model/class-list.model';
// import { ClassListService } from './class-list.service';

@Injectable()
export class AllClassListService {
  newAllClassChanged = new Subject<AllClassList[]>();
  editMode = false;
  editedClassList: ClassList[] = [];
  editedClassListIndex: number;
  editedClassNum: string;
  deleteTestIndex: number;
  deleteClassMode: boolean;

  private allClassList: AllClassList[] = [
    new AllClassList(
      '0',
      [
        new ClassList(
          '1',
          'Rehan',
          'rehan123#'
        ),
        new ClassList(
          '2',
          'Saniya',
          'sahiya@564'
        )
      ]
    ),
    new AllClassList(
      '1',
      [
        new ClassList(
          '1',
          'Mohit',
          'Mohit+222'
        ),
        new ClassList(
          '2',
          'Mehrun',
          'Mehrun@965'
        )
      ]
    ),
  ];
  constructor(
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar
  ) {}

  getAllClassList(){
    return this.allClassList.slice();
  }
  addFromClassListToAllClassList(newClass1: AllClassList) {
    this.allClassList.push(newClass1);
    this.newAllClassChanged.next(this.allClassList.slice());
    this.openSnackBar('Class list was Added!', 'okay');
  }
  addClassListToCreateClass(index: number) {
    this.editMode = true;
    this.editedClassListIndex = index;
    this.editedClassList = this.allClassList[index].classStudent;
    this.editedClassNum = this.allClassList[index].classNumber;
  }
  updateAllClassList(index: number, newClassNum: string, newClassList: ClassList[]) {
    this.allClassList[index].classStudent = newClassList;
    this.allClassList[index].classNumber = newClassNum;
    this.newAllClassChanged.next(this.allClassList.slice());
    this.openSnackBar('Class list was Updated!', 'okay');
  }
  removeClassList(index: number) {
    this.allClassList.splice(index, 1);
    this.deleteClassMode = false;
    this.newAllClassChanged.next(this.allClassList.slice());
    this.openSnackBar('Class list was Deleted!', 'okay');
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
