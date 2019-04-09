import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService) {
    this.authService.handleAuthentication();
  }

  ngOnInit() {}

  /**
   * Is in order to login with a session in the app
   */
  login(): void {
    this.authService.login();
  }

  /**
   * Logout of a session
   */
  logout(): void {
    this.authService.logout();
  }
}
