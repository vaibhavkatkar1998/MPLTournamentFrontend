import { Component, OnInit } from '@angular/core';
import { MatchTimeTableService } from './match-time-table.service';
import { LoadingService } from '../loading.service';
import { LoginService } from '../login/login.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-match-time-table',
  templateUrl: './match-time-table.component.html',
  styleUrls: ['./match-time-table.component.css']
})
export class MatchTimeTableComponent implements OnInit {
  page = 0;
  size = 15;
  listOfMatches: any[] = [];
  paginationResponse: any;

  constructor(private loginService : LoginService, private matchTimeTableService : MatchTimeTableService, private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.getListOfMatches();
  }


  getListOfMatches() {
    this.loadingService.show()
    this.matchTimeTableService.getListOfMatches(this.page,this.size).subscribe({
      next: (response) => {
        this.paginationResponse = response;
        this.listOfMatches = response?.content;
        this.loadingService.hide();
      },
      error: (error) => {
        this.loadingService.hide;
        console.log(error);
      }
     })
  }

  convertToDateTime(matchDate : any,timeString: string): Date {
    return new Date(`${matchDate}T${timeString}`); // Append a dummy date
  }

  onPageChange(event: PageEvent) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    
    // Call your API or update your data based on the new page number and size
    this.getListOfMatches();
  }

}
