import { Subject } from 'rxjs';

import { ClassList } from '../../model/class-list.model';

export class CLassListService {
  classListChanged = new Subject<ClassList[]>();

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
  getClassList(){
    return this.allClassList.slice();
  }
  getEachClassList(index: number){
    return this.allClassList[index];
  }
  addClassList(classList: ClassList) {
    this.allClassList.push(classList);
  }
}
