import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RaceResultModel } from '../../../types/race-result-model.type';
import { RaceEventModel } from '../../../types/race-event-model.type';
import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-race-result-recording',
  templateUrl: './race-result-recording.component.html',
  styleUrls: ['./race-result-recording.component.scss']
})
export class RaceResultRecordingComponent {

  public raceResults: RaceResultModel[];

  raceDetails: RaceEventModel;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private logger: LoggerService) { 

    this.route.data.subscribe(val => { 
      this.raceResults = val["racerResults"];

      this.raceDetails = this.raceResults[0].raceEvent;

      this.logger.log("RaceResultRecording Component");
      this.logger.log(this.raceResults);
    });

  }

}
