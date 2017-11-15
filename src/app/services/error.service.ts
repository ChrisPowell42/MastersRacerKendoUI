import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DialogService } from '@progress/kendo-angular-dialog';

import { LoggerService } from './logger.service';

import 'rxjs/add/observable/throw';

@Injectable()
export class ErrorService {

    constructor(private logger: LoggerService,
                private dialogService: DialogService) { }

    handleError(error: Response | any) {

        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        this.logger.error(errMsg);
        this.displayError(errMsg);

        return Observable.throw(errMsg);

    }

    displayError(error: string ) {

        this.dialogService.open({
            title: 'Error',
            content: error,
            actions: [{ text: "Ok" }]});

    }

}
