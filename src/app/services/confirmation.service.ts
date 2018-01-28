import { Injectable, Inject, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { OkayCancelDialogComponent } from '../okay-cancel-dialog/okay-cancel-dialog.component';
import { LoggerService } from './logger.service';

@Injectable()
export class ConfirmationService {

  constructor(private logger: LoggerService,
              private dialog: MatDialog) { }

  okCancel(dialogMessage: string): Observable<boolean> {
  
    let dialogRef = this.dialog.open(OkayCancelDialogComponent, {
      data: { message: dialogMessage }
    });

    return dialogRef.afterClosed();
  }

}