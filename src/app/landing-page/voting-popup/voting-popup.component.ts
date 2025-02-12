import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VotingService } from './voting.service';
import { NotificationService } from 'src/app/notification.service';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-voting-popup',
  templateUrl: './voting-popup.component.html',
  styleUrls: ['./voting-popup.component.css']
})
export class VotingPopupComponent {
  matchDetails: any;
  selectedOption: string | null = null; // No default selection


  constructor(public dialogRef: MatDialogRef<VotingPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private votingService : VotingService,
  private notificationService: NotificationService, private loadingService: LoadingService) {
    this.matchDetails = data;
  }

  closeDialog(): void {
    this.loadingService.show();
    if (this.selectedOption) {
      this.matchDetails.selectedTeam = this.selectedOption;
      this.votingService.registerVote(this.matchDetails).subscribe({
        next : (response) => {
          console.log(response);
          this.loadingService.hide();
          this.notificationService.showSuccess(response,10000);
        },
        error: (error) => {
          console.log(error);
          this.loadingService.hide();
          this.notificationService.showError(error.error,10000);
        }
      }
       
      )
    }
    this.dialogRef.close();
  }
}
