import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RaceEventModel } from '../../../types/race-event-model.type';
import { RaceEventTypeModel } from '../../../types/raceEventType.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './race-event-details.component.html',
  styleUrls: ['./race-event-details.component.scss']
})
export class RaceEventDetailsComponent {

  raceEvent: RaceEventModel;
  
  constructor(private route: ActivatedRoute,
              private logger: LoggerService) {
  
                this.route.data.subscribe(val => {
                  this.raceEvent = val["raceEvent"];
                });
            
              }

  isRace(): boolean {
    //this.logger.log("isRace check");
    this.logger.log(this.raceEvent.raceEventType);
    this.logger.log(RaceEventTypeModel.raceId);
    return this.raceEvent.raceEventType.id == RaceEventTypeModel.raceId;
  }


}
