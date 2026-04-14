import { Component, Input, OnInit } from '@angular/core';
import { LandingPageService } from '../landing-page.service';
import { MatDialog } from '@angular/material/dialog';
import { VotingPopupComponent } from 'src/app/landing-page/voting-popup/voting-popup.component';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-match-card-section',
  templateUrl: './match-card-section.component.html',
  styleUrls: ['./match-card-section.component.css'],
})
export class MatchCardSectionComponent implements OnInit {
  @Input('userName') userName: any;
  matchResponseList: any[] = [];
  checkboxes = { A: false, B: false };
  openDilouge: boolean = false;

  constructor(
    private landingPageService: LandingPageService,
    public dialog: MatDialog,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getTodaysMatches();
  }

  getTodaysMatches() {
    this.loadingService.show();
    const fromAdmin = false;
    this.landingPageService.getTodaysMatches(fromAdmin).subscribe({
      next: (response) => {
        if (response) {
          this.matchResponseList = response || [];
        }
        this.loadingService.hide();
      },
      error: (error) => {
        console.log(error);
        this.loadingService.hide();
      },
    });
  }

  convertToDateTime(matchDate: any, timeString: string): Date {
    return new Date(`${matchDate}T${timeString}`);
  }

  compareMatchTime(matchDetails: any): boolean {
    if (!matchDetails?.matchDate || !matchDetails?.matchTime) {
      return false;
    }

    const currentDateTime = new Date();
    const matchDateTime = this.convertToDateTime(
      matchDetails.matchDate,
      matchDetails.matchTime
    );

    if (Number.isNaN(matchDateTime.getTime())) {
      return false;
    }

    return currentDateTime > matchDateTime;
  }

  openDialog(matchDetails: any): void {
    if (matchDetails) {
      if (this.compareMatchTime(matchDetails)) {
        alert('You are late, Voting time exceeds');
        return;
      }
    }
    this.dialog.open(VotingPopupComponent, {
      width: '300px',
      data: matchDetails
    });
  }
}
