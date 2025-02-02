import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LandingPageService } from '../landing-page.service';

@Component({
  selector: 'app-match-card-section',
  templateUrl: './match-card-section.component.html',
  styleUrls: ['./match-card-section.component.css']
})
export class MatchCardSectionComponent implements OnInit {
  matchResponseList: any[] = [];
  constructor(private landingPageService : LandingPageService) {}


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

  
}
