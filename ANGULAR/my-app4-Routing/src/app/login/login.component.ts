import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  interruttore: boolean;
  ngOnInit(): void {
    this.interruttore = this.authService.loggedIn;
  }
  onLogin() {
    this.interruttore = true;
    this.authService.login();
    this.router.navigate(['/servers']);
  }
  onLogout() {
    this.interruttore = false;
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
