import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LandingPageService } from '../landing-page.service';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VotingPopupComponent } from 'src/app/landing-page/voting-popup/voting-popup.component';

@Component({
  selector: 'app-match-card-section',
  templateUrl: './match-card-section.component.html',
  styleUrls: ['./match-card-section.component.css']
})
export class MatchCardSectionComponent implements OnInit {
  @Input('userName') userName : any;
  matchResponseList: any[] = [];
  checkboxes = { A: false, B: false };
  openDilouge: boolean = false;

  constructor(private landingPageService : LandingPageService, private datePipe : DatePipe,
    public dialog: MatDialog) {}


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

  convertToDateTime(matchDate : any,timeString: string): Date {
    return new Date(`${matchDate}T${timeString}`); // Append a dummy date
  }

  compareMatchTime(matchDetails: any) : boolean {
    const currentTime = this.datePipe.transform(new Date(), 'HH:mm:ss');
    if(this.timeToSeconds(currentTime!) > this.timeToSeconds(matchDetails?.matchTime!)) {
      return true;
    } else {
      return false;
    }
  }

  // Helper function to convert "HH:mm:ss" string to total seconds
  timeToSeconds(time: string): number {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  openDialog(matchDetails : any): void {
    if(matchDetails) {
      if(this.compareMatchTime(matchDetails)) {
        alert("You are late, Voting time exceeds")
        return;
      }
    }
    this.dialog.open(VotingPopupComponent, {
      width: '300px',
      data: matchDetails
    });
  }

  
}
