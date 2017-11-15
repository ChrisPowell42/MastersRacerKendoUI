import { Component } from '@angular/core';
import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './location-default.component.html',
  styleUrls: ['./location-default.component.scss']
})
export class LocationDefaultComponent  {

  constructor(private logger: LoggerService) {
    //this.logger.log("LocationDefaultComponent constructed");
   }


}
