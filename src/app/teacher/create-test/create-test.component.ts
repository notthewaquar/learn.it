import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddEditTestComponent } from './add-edit-test/add-edit-test.component';


@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(AddEditTestComponent);
  }

}
