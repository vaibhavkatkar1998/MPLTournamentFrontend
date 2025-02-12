import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { PastVoteService } from './past-vote.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-past-votes',
  templateUrl: './past-votes.component.html',
  styleUrls: ['./past-votes.component.css']
})
export class PastVotesComponent implements OnInit {
  userId: any;
  lastTenVotes: any[] = [];

  constructor(private loginService : LoginService, private pastVoteService : PastVoteService, private loadingService: LoadingService) {
    this.userId = this.loginService.getClaim("userId");
  }

  ngOnInit(): void {
    this.loadingService.show();
    this.pastVoteService.getLast10Votes(this.userId).subscribe({
        next: (response) => {
          this.loadingService.hide();
          this.lastTenVotes = response;
        },
        error: (error) => {
          this.loadingService.hide();
          console.warn(error);
        }
    })
  }

  convertToDateTime(matchDate : any,timeString: string): Date {
    return new Date(`${matchDate}T${timeString}`); // Append a dummy date
  }
}
