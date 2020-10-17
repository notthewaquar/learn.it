import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';

import { ClassList } from '../../shared/model/class-list.model';
// import { CLassListService } from 'src/app/shared/service/class-list/class-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  // formvalid: FormGroup;
  home = new ClassList('', '', '');
  selectClass = '';

  allClassList: ClassList[] = [
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
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.selectClass = null;
    // this.allClassList = this.classListService.getClassList();
  }

  addClassList(){
    const home = new ClassList((this.allClassList.length + 1).toString(), '', (this.makeid(6)).toString());
    this.allClassList.push(home);
  }
  removeStudent(index: number) {
    this.allClassList.splice(index, 1);
    this.openSnackBar('Student was removed', 'okay');
  }
  // password
  makeid(length) {
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
    this.openSnackBar(name + ' credentials copied !', 'okay');
  }
 onSubmit(form: NgForm){
  //  const link = 'https://ng-complete-guide-63c17.firebaseio.com/classlist/class' + this.selectClass + '.json';
  //  this.http.post<{name: string}>(
  //       link,
  //       this.allClassList
  //     ).subscribe(classRespData => {
  //       console.log(classRespData);
  //     },
  //     error => {
  //       console.log('There was an error' + error);
  //   });
  this.selectClass = '';
  this.allClassList = [];
  const home = new ClassList((this.allClassList.length + 1).toString(), '', (this.makeid(6)).toString());
  this.allClassList.push(home);
  console.log(form.value);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
