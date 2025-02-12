import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  userDetails: any[] = [];
  displayedColumns: string[] = ['name', 'points'];

  constructor(private leaderBoardService : LeaderboardService, private loadingService: LoadingService) {}

  ngOnInit(): void {
   this.loadingService.show();
   this.leaderBoardService.getAllUsers().subscribe({
    next: (response) => {
      this.loadingService.hide();
      this.userDetails = response;
    },
    error: (error) => {
      this.loadingService.hide();
      console.log(error)
    }
   })
  }
}
