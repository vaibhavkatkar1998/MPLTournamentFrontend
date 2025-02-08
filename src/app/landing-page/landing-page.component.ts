import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavOpened = false;
  userName: any;
  userRole: any;

  constructor(private loginService : LoginService) {}

  ngOnInit(): void {
    this.userName = this.loginService.getClaim("sub");
    this.userRole = this.loginService.getClaim("role");
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenav.toggle();
  }
}
