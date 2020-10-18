import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  notAuthorised = false;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    // if (!form.valid) {
    //   return;
    // }
    const email = form.value.email;
    const password = form.value.password;
    // console.log(form.value);
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;
    // login
    authObs = this.authService.login(email, password);

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      errorRes => {
        console.log(errorRes);
        this.isLoading = false;
      }
    );
    // if (form.value.select === 'teacher') {
    //   this.router.navigate(['/teacher']);
    // } else if (form.value.select === 'student') {
    //   this.router.navigate(['/student']);
    // }

    // if (this.email === 'admin' && this.password === 'admin'){
    //   if (this.select === 'teacher') {
    //     this.router.navigate(['/teacher']);
    //   } else if (this.select === 'student') {
    //     this.router.navigate(['/student']);
    //   }
    // } else {
    //     alert('Invalid credentials');
    //     this.notAuthorised = true;
    // }
  }

}
