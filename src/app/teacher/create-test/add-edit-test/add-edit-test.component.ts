import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-test',
  templateUrl: './add-edit-test.component.html',
  styleUrls: ['./add-edit-test.component.css']
})
export class AddEditTestComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.dialog.close();
  }
  // onNoClick() {
  //   this.dialog.close();
  // }
}
