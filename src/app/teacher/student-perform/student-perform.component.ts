import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
  {position: 3, name: 'Lithium', weight: 6.941},
  {position: 4, name: 'Beryllium', weight: 9.0122},
  {position: 5, name: 'Boron', weight: 10.811},
  {position: 6, name: 'Carbon', weight: 12.0107},
  {position: 7, name: 'Nitrogen', weight: 14.0067},
  {position: 8, name: 'Oxygen', weight: 15.9994},
  {position: 9, name: 'Fluorine', weight: 18.9984},
  {position: 11, name: 'Neon', weight: 20.1797},
  {position: 12, name: 'Neon', weight: 20.1797},
  {position: 13, name: 'Neon', weight: 20.1797},
  {position: 14, name: 'Neon', weight: 20.1797},
  {position: 15, name: 'Neon', weight: 20.1797},
  {position: 16, name: 'Neon', weight: 20.1797},
  {position: 17, name: 'Neon', weight: 20.1797},
  {position: 18, name: 'Neon', weight: 20.1797},
  {position: 19, name: 'Neon', weight: 20.1797},
  {position: 20, name: 'Neon', weight: 20.1797},
];

@Component({
  selector: 'app-student-perform',
  templateUrl: './student-perform.component.html',
  styleUrls: ['./student-perform.component.css']
})
export class StudentPerformComponent implements AfterViewInit, OnInit  {
  @ViewChild(MatSort) sort: MatSort;

  selected = null;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
