import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RaceEventModel } from '../../../types/race-event-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './race-event-details.component.html',
  styleUrls: ['./race-event-details.component.scss']
})
export class RaceEventDetailsComponent {

  private raceEvent: RaceEventModel;
  
  constructor(private route: ActivatedRoute,
              private logger: LoggerService) {
  
                this.route.data.subscribe(val => {
                  this.raceEvent = val["raceEvent"];
                });
            
              }
  
}
