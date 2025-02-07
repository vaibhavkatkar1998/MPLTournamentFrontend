import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VotingService } from './voting.service';

@Component({
  selector: 'app-voting-popup',
  templateUrl: './voting-popup.component.html',
  styleUrls: ['./voting-popup.component.css']
})
export class VotingPopupComponent {
  matchDetails: any;
  selectedOption: string | null = null; // No default selection


  constructor(public dialogRef: MatDialogRef<VotingPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private votingService : VotingService) {
    this.matchDetails = data;
  }

  closeDialog(): void {
    if (this.selectedOption) {
      this.matchDetails.selectedTeam = this.selectedOption;
      this.votingService.registerVote(this.matchDetails).subscribe({
        next : (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      }
       
      )
    }
    this.dialogRef.close();
  }
}
