import { Component } from '@angular/core';
import { LoadingService } from '../loading.service';
import { LoginService } from '../login/login.service';
import { MatchTimeTableService } from '../match-time-table/match-time-table.service';
import { AllUserVotingService } from './all-user-voting.service';

@Component({
  selector: 'app-all-user-voting',
  templateUrl: './all-user-voting.component.html',
  styleUrls: ['./all-user-voting.component.css']
})
export class AllUserVotingComponent {
  listOfAllUserVotes: any[] = [];
  paginationResponse: any;

  constructor(private loginService : LoginService, private allUserVotingService : AllUserVotingService, private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.getListOfAllUserVotes();
  }

  getListOfAllUserVotes() {
    this.loadingService.show()
    this.allUserVotingService.getAllUserVotes().subscribe({
      next: (response) => {
        this.listOfAllUserVotes = response;
        this.loadingService.hide();
      },
      error: (error) => {
        this.loadingService.hide;
        console.log(error);
      }
     })
  }
}
