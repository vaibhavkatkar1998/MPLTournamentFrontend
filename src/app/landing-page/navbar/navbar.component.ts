import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input('userRole') userRole : any;

  constructor(private loginService : LoginService) {

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
