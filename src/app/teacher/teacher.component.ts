import { Component, OnInit } from '@angular/core';
// import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  // showLoadingIndicator = true;

  constructor(
    // private router: Router
  ) {
    // this.router.events.subscribe((routerEvent: Event) => {
    //   if (routerEvent instanceof NavigationStart) {
    //     this.showLoadingIndicator = true;
    //   }

    //   if (routerEvent instanceof NavigationEnd) {
    //     this.showLoadingIndicator = false;
    //   }
    // });
  }

  ngOnInit(): void {
  }

}
