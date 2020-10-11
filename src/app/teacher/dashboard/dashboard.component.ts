import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showUpcomingTest() {
    this.router.navigate(['upcoming-test'], {relativeTo: this.route});
  }

  createTest() {
    this.router.navigate(['create-test'], {relativeTo: this.route});
  }

  studentPerform() {
    this.router.navigate(['student-performance'], {relativeTo: this.route});
  }
}
