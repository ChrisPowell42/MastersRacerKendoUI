import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DialogService, DialogRef, DialogCloseResult, DialogAction, DialogResult } from '@progress/kendo-angular-dialog';

import { LoggerService } from './logger.service';

@Injectable()
export class ConfirmationService {

  private readonly okStr: string = 'Ok';
  private readonly cancelStr: string = 'Cancel';

  private readonly okAction: DialogAction;
  private readonly cancelAction: DialogAction;

  constructor(private logger: LoggerService,
              private dialogService: DialogService) { 

    this.okAction = new DialogAction();
    this.okAction.text = this.okStr;

    this.cancelAction = new DialogAction();
    this.cancelAction.text = this.cancelStr;
  }

  okCancel(message: string): Observable<boolean> {
  
    let options:DialogAction[] = [this.okAction, this.cancelAction];

    return this.display(message, options).map(result => {

      if (result instanceof DialogCloseResult) {
        return false;
      }
      
      let actionResult: DialogAction = <DialogAction>result;
      
      if (actionResult == this.okAction)
        return true;

      return false;

    });

  }

  okay(message: string): Observable<boolean> {

    let options:DialogAction[] = [this.okAction];

    return this.display(message, options).map(result => {

      if (result instanceof DialogCloseResult) {
        return false;
      }

      let actionResult:DialogAction = <DialogAction>result;

      if (actionResult == this.okAction)
        return true;
      
      return false;
      
    });
  }

  private display(message: string, options:DialogAction[] ): Observable<DialogCloseResult | DialogAction> {
    
    const dialog: DialogRef = this.dialogService.open({
                                        title: 'Confirm',
                                        content: message,
                                        actions: options
                                    });

    return dialog.result;

    // .map(result => {
    //   if (result instanceof DialogCloseResult) {
    //     return false;
    //   }
    //   else {
    //     this.logger.log(result);
    //     return true;
    //   }
    // });
                                    

  }  

}
