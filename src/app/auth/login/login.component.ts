import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  authorised = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin'){
      this.router.navigate(['/teacher']);
      console.log('hh');
      this.authorised = true;
    } else {
        alert('Invalid credentials');
    }
  }

}