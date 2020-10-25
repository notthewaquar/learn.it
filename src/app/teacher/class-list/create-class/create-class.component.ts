import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';

import { ClassListService } from 'src/app/shared/service/class-list/class-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AllClassListService } from 'src/app/shared/service/class-list/all-class-list.service';
import { AllClassList } from 'src/app/shared/model/all-class-list.model';
import { Router } from '@angular/router';
import { ClassList } from 'src/app/shared/model/class-list.model';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit, OnDestroy {
  @ViewChild('f') classListForm: NgForm;
  // formvalid: FormGroup;
  selectClass = '';
  editMode = false;
  editedClassList = [];
  editedClassListIndex: number;
  editedClassNum: string;

  allClassList: ClassList[];

  constructor(
    private classListService: ClassListService,
    private allClassListService: AllClassListService,
    private router: Router,
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.editMode = this.allClassListService.editMode;
    if (!this.editMode) {
      this.allClassList = this.classListService.getClassList();
    } else {
      this.editedClassListIndex = this.allClassListService.editedClassListIndex;
      this.allClassList = this.allClassListService.editedClassList;
      this.editedClassNum = this.allClassListService.editedClassNum;
      this.classListService.addEditingList(this.allClassList);
      this.selectClass = this.editedClassNum;
    }
    this.classListService.newFieldChanged
      .subscribe(
        (allClassList: ClassList[]) => {
          this.allClassList = allClassList;
        }
      );
  }

  addNewList(){
    const home = new ClassList(
      (this.allClassList.length + 1).toString(),
      '',
      (this.passwordGenerator(6)).toString()
    );
    this.classListService.addNewField(home);
  }

  removeStudent(index: number) {
    this.classListService.removeClassStudent(index);
    this.openSnackBar('Student was removed', 'okay');
  }

  onSubmit(form: NgForm){
    // const link = 'https://ng-complete-guide-63c17.firebaseio.com/classlist/class' + this.selectClass + '.json';
    // this.http.post<{name: string}>(
    //     link,
    //     this.classListService.getClassList();
    //   ).subscribe(classRespData => {
    //     console.log(classRespData);
    //   },
    //   error => {
    //     console.log('There was an error' + error);
    // });
    if (this.editMode) {
      this.allClassListService.updateAllClassList(
        this.editedClassListIndex,
        this.selectClass,
        this.allClassList
      );
      this.openSnackBar('Class was Updated!', '');
    } else {
      this.addClassListToAllClassList(form.value.selectClass);
      this.openSnackBar('New class created!', '');
    }
    this.classListService.resetAddClassList();
    this.router.navigate(['teacher/class-list']);
  }
  addClassListToAllClassList(classNum: string){
    const newClass1 = new AllClassList(
      classNum,
      this.allClassList
    );
    this.allClassListService.addFromClassListToAllClassList(newClass1);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 1000,
    });
  }
  // password
  passwordGenerator(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  // copy to clipboard
  copyInputMessage(index: number) {
    if (this.allClassList[index].studentName === '') {
      this.openSnackBar('Please fill name', '');
    } else {
      const rollNo = this.allClassList[index].rollNo;
      const name = this.allClassList[index].studentName;
      const pass = this.allClassList[index].studentPassword;
      const textVal = `Roll No: ${rollNo},\nName: ${name},\nPassword: ${pass}`;
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = textVal;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      this.openSnackBar(name + ' credentials copied !', '');
    }
  }
  ngOnDestroy() {
    //
  }
}
