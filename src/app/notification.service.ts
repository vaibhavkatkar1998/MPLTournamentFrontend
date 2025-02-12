import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string, duration: number = 3000) {
    this.snackBar.open(message, 'OK', {
      duration,
      panelClass: ['success-snackbar'],
      verticalPosition: 'top', // 'bottom' | 'top'
      horizontalPosition: 'center' // 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }

  showError(message: string, duration: number = 3000) {
    this.snackBar.open(message, 'Close', {
      duration,
      panelClass: ['error-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  showInfo(message: string, duration: number = 3000) {
    this.snackBar.open(message, 'Got it', {
      duration,
      panelClass: ['info-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
}
