import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';

import { ClassList } from '../../shared/model/class-list.model';
import { CLassListService } from 'src/app/shared/service/class-list/class-list.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  allClassList: ClassList[];

  constructor(
    private classListService: CLassListService,
  ) { }

  ngOnInit(): void {
    this.allClassList = this.classListService.getClassList();
  }
}
