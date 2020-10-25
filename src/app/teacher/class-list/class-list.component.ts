import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllClassList } from 'src/app/shared/model/all-class-list.model';
import { AllClassListService } from 'src/app/shared/service/class-list/all-class-list.service';
import { ClassListService } from 'src/app/shared/service/class-list/class-list.service';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.allClassList = this.allClassListService.getAllClassList();
    console.log(this.allClassListService.getAllClassList());
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
  deleteList(index: number) {
    console.log(index + 'delete class');
    this.allClassListService.removeClassList(index);
  }
}
