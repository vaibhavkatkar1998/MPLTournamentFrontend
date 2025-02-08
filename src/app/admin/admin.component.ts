import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../landing-page/landing-page.service';
import { DatePipe } from '@angular/common';
import { AdminService } from './admin.service';

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

  constructor(private landingPageService : LandingPageService, private adminService : AdminService) {}

  ngOnInit(): void {
   this.getTodaysMatches();
  }

  getTodaysMatches() {
    this.landingPageService.getTodaysMatches().subscribe((response) => {
       if(response) {
         this.matchResponseList = response || [];
       }
    }, 
    (error) => {
 
    })
   }

   updateResult(matchDetails: any, matchStatus : any) {
    console.log(this.selectedRadioValue)
    matchDetails.matchStatus = matchStatus;
    matchDetails.betValue = this.selectedRadioValue;
    this.adminService.updateMatchResult(matchDetails).subscribe({
      next : (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
    }
}
