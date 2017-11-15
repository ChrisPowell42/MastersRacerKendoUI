import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RaceEventModel } from '../../../types/race-event-model.type';
import { SeasonModel } from '../../../types/season-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './race-events.component.html',
  styleUrls: ['./race-events.component.scss'],
  providers: [LoggerService]  
})
export class RaceEventsComponent {

  private raceEvents: RaceEventModel[];
  private activeSeason: SeasonModel;
  private title: string = "Races";

  constructor(private route: ActivatedRoute,
    private router: Router,    
    private logger: LoggerService) {

      this.route.data.subscribe(val => {
        //this.logger.log(val);
        this.raceEvents = val["raceEventsList"];
        this.activeSeason = val["activeSeason"];
        //this.logger.log(this.raceEvents);
      });
      
    }

    addNewRaceEvent() {

      this.router.navigate(['/admin/raceevents/new']);

    }

}
