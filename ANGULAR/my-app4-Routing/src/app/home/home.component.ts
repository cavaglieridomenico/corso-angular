import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  textButton: string;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.loggedIn) {
      this.textButton = 'Logout';
    } else {
      this.textButton = 'Login';
    }
  }

  onLog() {
    if (this.authService.loggedIn) {
      this.authService.logOut();
      this.textButton = 'Login';
    } else {
      this.authService.login();
      this.textButton = 'Logout';
    }
  }
}
