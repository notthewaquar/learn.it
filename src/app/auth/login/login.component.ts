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
  select: string;
  notAuthorised = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin'){
      if (this.select === 'teacher') {
        this.router.navigate(['/teacher']);
      } else if (this.select === 'student') {
        this.router.navigate(['/student']);
      }
    } else {
        alert('Invalid credentials');
        this.notAuthorised = true;
    }
  }

}
