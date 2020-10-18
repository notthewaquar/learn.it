import {
  Component,
  OnInit,
  enableProdMode
} from '@angular/core';
// import { AuthService } from './auth/auth.service';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'LEARN.it';

  constructor(
    // private authService: AuthService
  ) {}

  ngOnInit() {
    // this.authService.autoLogin();
  }
}
