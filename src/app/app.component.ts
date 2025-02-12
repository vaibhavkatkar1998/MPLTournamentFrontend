import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MPLTournament';
  userRole: any;
  userName: any;
  constructor(private loginService : LoginService) {
    this.userRole = this.loginService.getClaim("role");
    this.userName = this.loginService.getClaim("sub");
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavOpened = false;

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenav.toggle();
  }

  logoutFromSystem() {
    this.loginService.logout();
  }
}
