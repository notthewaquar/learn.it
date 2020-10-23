import { Component, OnInit } from '@angular/core';
import { AllClassList } from 'src/app/shared/model/all-class-list.model';
import { ClassList } from 'src/app/shared/model/class-list.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  panelOpenState = false;
  allClassList: AllClassList[] = [
    new AllClassList(
      '5',
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
      '7',
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
  constructor() { }

  ngOnInit(): void {
  }

}
