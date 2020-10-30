import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import { AllClassList } from 'src/app/shared/model/all-class-list.model';
import { AllClassListService } from 'src/app/shared/service/class-list/all-class-list.service';
import { ClassListService } from 'src/app/shared/service/class-list/class-list.service';
import { DeleteModalComponent } from 'src/app/shared/modal/delete-modal/delete-modal.component';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  panelOpenState = false;
  allClassList: AllClassList[];

  constructor(
    private allClassListService: AllClassListService,
    private classListService: ClassListService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.allClassList = this.allClassListService.getAllClassList();
    this.allClassListService.newAllClassChanged
      .subscribe(
        (allClassList: AllClassList[]) => {
          this.allClassList = allClassList;
        }
      );
  }
  createClass(){
    this.router.navigate(['teacher/create-class']);
    this.classListService.resetAddClassList();
  }
  editClassList(index: number) {
    this.allClassListService.addClassListToCreateClass(index);
    this.createClass();
  }
  deleteModal(index: number) {
    this.dialog.open(DeleteModalComponent);
    this.allClassListService.deleteTestIndex = index;
    this.allClassListService.deleteClassMode = true;
  }
}
