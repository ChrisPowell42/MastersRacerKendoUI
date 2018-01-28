import { Injectable, Inject, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LoggerService } from './logger.service';

@Injectable()
export class ConfirmationService {

  constructor(private logger: LoggerService,
              private dialog: MatDialog) { 

  }

  okCancel(dialogMessage: string): Observable<boolean> {
  
    let dialogRef = this.dialog.open(OkayCancelDialogComponent, {
      data: { message: dialogMessage }
    });

    return dialogRef.afterClosed();
  }

}

@Component({
  template: "<h1 mat-dialog-title>Confirm</h1>\
             <div mat-dialog-content>{{data.message}}</div>\
             <div mat-dialog-actions>\
               <button mat-button (click)=\"onOkay()\" cdkFocusInitial>Okay</button>\
               <button mat-button (click)=\"onCancel()\">Cancel</button>\
             </div>"
})
export class OkayCancelDialogComponent {

  constructor(public dialogRef: MatDialogRef<OkayCancelDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onOkay(): void {
    this.dialogRef.close(true);
  }
}
