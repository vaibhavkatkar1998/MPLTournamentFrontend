import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'MPLTournament';
  userRole: string | null = null;
  userName: string | null = null;
  showNavbar = true;

  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavOpened = false;

  constructor(private loginService: LoginService, private router: Router) {
    // Listen for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = this.router.url !== '/'; // Hide navbar on login page
        this.updateUserDetails();
      }
    });
  }

  ngAfterViewInit() {
    this.updateUserDetails();
  }

  updateUserDetails() {
    this.userRole = this.loginService.getClaim("role");
    this.userName = this.loginService.getClaim("sub");
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenav.toggle();
  }

  closeSidenav() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  logoutFromSystem() {
    this.loginService.logout();
  }
}
