import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RaceEventModel } from '../../../types/race-event-model.type';
import { SeasonModel } from '../../../types/season-model.type';
import { LocationModel } from '../../../types/location-model.type';
import { RaceFormatModel } from '../../../types/raceFormat.type';
import { RacePhaseModel } from '../../../types/racePhase.type';

import { LoggerService } from '../../../services/logger.service';
import { RaceEventService } from '../../../services/race-event.service';
import { RefDataService } from '../../../services/refdata.service';

@Component({
  templateUrl: './race-event-editor.component.html',
  styleUrls: ['./race-event-editor.component.scss']
})
export class RaceEventEditorComponent {

  raceEvent: RaceEventModel;
  activeSeason: SeasonModel;
  locations: LocationModel[];
  raceFormats: RaceFormatModel[];

  private scheduledPhase: RacePhaseModel;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private raceEventService: RaceEventService,
              private refDataService: RefDataService,
              private logger: LoggerService) {

    this.route.data.subscribe(val => {
      this.raceEvent = val["raceEvent"];
      this.activeSeason = val["activeSeason"];
      this.locations = val["locationsList"];
      this.raceFormats = val["raceFormats"];

      //this.logger.log(this.raceEvent.scheduledStartTime);
      //this.raceEvent.scheduledStartTime = new Date(this.raceEvent.scheduledStartTime.)
    });

  }

  saveChanges() {
    
    this.logger.log(this.raceEvent);

    if (this.raceEvent.id == null){

      this.raceEvent.season = this.activeSeason;

      this.raceEventService.addRaceEvent(this.raceEvent).subscribe( res => {
        this.router.navigate(['/admin']).then( () => this.router.navigate([`/admin/raceevents/detail/${res.id}`]));        
      });

    } 
    else {

      this.raceEventService.saveRaceEvent(this.raceEvent).subscribe( res => {
        this.router.navigate(['/admin']).then( () => this.router.navigate([`/admin/raceevents/detail/${res.id}`]));                
      });

    }

  }

  cancelChanges() {

    this.router.navigate(["/admin/raceevents"]);

  }

}
