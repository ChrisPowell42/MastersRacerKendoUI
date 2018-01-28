import { Component, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-okay-cancel-dialog',
  templateUrl: './okay-cancel-dialog.component.html',
  styleUrls: ['./okay-cancel-dialog.component.scss']
})
export class OkayCancelDialogComponent  {

  constructor(public dialogRef: MatDialogRef<OkayCancelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onOkay(): void {
    this.dialogRef.close(true);
  }

}
