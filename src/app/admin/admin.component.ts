import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../landing-page/landing-page.service';
import { DatePipe } from '@angular/common';
import { AdminService } from './admin.service';
import { NotificationService } from '../notification.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  matchResponseList: any[] = [];
  selectedOption1: string | null = null; // No default selection
  selectedOption2: string | null = null; // No default selection
  options = [25, 50, 75, 100];
  selectedRadioValue = 25; // Default selected value

  constructor(private landingPageService : LandingPageService, private adminService : AdminService,
    private notificationService: NotificationService, private loadingService: LoadingService) {}

  ngOnInit(): void {
   this.getTodaysMatches();
  }

  getTodaysMatches() {
    this.loadingService.show()
    this.landingPageService.getTodaysMatches().subscribe({
      next: (response) => {
        if(response) {
          this.matchResponseList = response || [];
        }
        this.loadingService.hide();
      },
      error: (error) =>{
        console.log(error);
        this.loadingService.hide()
      }
    });
  }

   updateResult(matchDetails: any, matchStatus : any) {
    this.loadingService.show()
    matchDetails.matchStatus = matchStatus;
    matchDetails.betValue = this.selectedRadioValue;
    this.adminService.updateMatchResult(matchDetails).subscribe({
      next : (response) => {
        this.loadingService.hide()
        this.notificationService.showSuccess(response,10000);
      },
      error: (error) => {
        console.log(error);
        this.loadingService.hide()
        this.notificationService.showSuccess(error?.error,10000);
      }
    })
    }
}
