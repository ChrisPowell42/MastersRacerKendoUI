import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { LoggerService } from './logger.service';

@Injectable()
export class MessageService {

  duration: number = 5000;

  constructor(private logger: LoggerService,
    private snackBar: MatSnackBar) { }

    public displayMessage(message: string) {

      this.snackBar.open(message, 'Ok', {duration: this.duration});

    }

}
