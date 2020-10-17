import { ClassList } from '../../model/class-list.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
export class CLassListService {
  home = new ClassList(
    '',
    '',
    ''
  );
  private allClassList: ClassList[] = [
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
  ];
  constructor(
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar
  ) {}

  getClassList(){
    return this.allClassList.slice();
  }
  getEachClassList(index: number){
    return this.allClassList[index];
  }
  addClassList(classList: ClassList) {
    this.allClassList.push(classList);
    this.openSnackBar('Neww student added', 'okay');
  }
  addNewField(){
    this.allClassList.push(this.home);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
