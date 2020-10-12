import {
  AfterViewInit,
  OnInit,
  Component,
  ViewChild
} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  rollNum: number;
  markScored: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {rollNum: 1, name: 'Hydrogen', markScored: 1.0079},
  {rollNum: 2, name: 'Helium', markScored: 4.0026},
  {rollNum: 3, name: 'Lithium', markScored: 6.941},
  {rollNum: 4, name: 'Beryllium', markScored: 9.0122},
  {rollNum: 5, name: 'Boron', markScored: 10.811},
  {rollNum: 6, name: 'Carbon', markScored: 12.0107},
  {rollNum: 7, name: 'Nitrogen', markScored: 14.0067},
  {rollNum: 8, name: 'Oxygen', markScored: 15.9994},
  {rollNum: 9, name: 'Fluorine', markScored: 18.9984},
  {rollNum: 10, name: 'Neon', markScored: 20.1797},
];

@Component({
  selector: 'app-student-perform',
  templateUrl: './student-perform.component.html',
  styleUrls: ['./student-perform.component.css']
})
export class StudentPerformComponent implements AfterViewInit, OnInit  {
  selected = null;

  displayedColumns: string[] = ['rollNum', 'name', 'markScored'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
