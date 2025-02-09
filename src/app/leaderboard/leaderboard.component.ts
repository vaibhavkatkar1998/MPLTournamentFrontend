import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  userDetails: any[] = [];
  displayedColumns: string[] = ['name', 'points'];

  constructor(private leaderBoardService : LeaderboardService) {}

  ngOnInit(): void {
   this.leaderBoardService.getAllUsers().subscribe({
    next: (response) => {
      this.userDetails = response;
    },
    error: (error) => {
      console.log(error)
    }
   })
  }
}
