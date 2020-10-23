import { Injectable } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable()
export class Spinner {
  showLoadingIndicator = true;

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = false;
      }

      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = true;
      }
    });
  }
}
