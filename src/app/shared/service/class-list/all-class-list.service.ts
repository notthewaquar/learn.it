import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { AllClassList } from '../../model/all-class-list.model';
import { ClassList } from '../../model/class-list.model';

@Injectable()
export class AllClassListService {
  newAllClassChanged = new Subject<AllClassList[]>();

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

  getAllClassList(){
    return this.allClassList.slice();
  }
  addFromClassListToAllClassList(newClass1: AllClassList) {
    this.allClassList.push(newClass1);
    this.newAllClassChanged.next(this.allClassList.slice());
    console.log('passed data');
  }
}
