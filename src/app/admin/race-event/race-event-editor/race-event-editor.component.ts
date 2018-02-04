import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RaceEventModel } from '../../../types/race-event-model.type';
import { SeasonModel } from '../../../types/season-model.type';
import { LocationModel } from '../../../types/location-model.type';
import { RaceFormatModel } from '../../../types/raceFormat.type';
import { RacePhaseModel } from '../../../types/racePhase.type';
import { RaceEventTypeModel } from '../../../types/raceEventType.type';

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
  locationId: string;
  raceFormats: RaceFormatModel[];
  raceFormatId: string;
  raceEventTypes: RaceEventTypeModel[];
  raceEventTypeId: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private raceEventService: RaceEventService,
              private refDataService: RefDataService,
              private logger: LoggerService) {

    this.route.data.subscribe(val => {

      this.raceEvent = val["raceEvent"];
      this.logger.log("RaceEvent Set to:")
      this.logger.log(this.raceEvent);

      this.raceEventTypeId = this.raceEvent.raceEventType == null ? null : this.raceEvent.raceEventType.id;
      this.raceFormatId = this.raceEvent.raceFormat == null ? null :this.raceEvent.raceFormat.id;
      this.locationId = this.raceEvent.location == null ? null : this.raceEvent.location.id;

      this.activeSeason = val["activeSeason"];
      this.locations = val["locationsList"];
      this.raceFormats = val["raceFormats"];
      this.raceEventTypes = val["raceEventTypes"];

      this.logger.log(this.raceEvent.scheduledStartTime);
      //this.raceEvent.scheduledStartTime = new Date(this.raceEvent.scheduledStartTime.)
    });

  }

  saveChanges() {
    
    this.logger.log(this.raceEvent);

    //this.newsItem.articleType = this.articleTypes.find(x=>x.id == this.articleTypeId);

    this.raceEvent.raceEventType = this.raceEventTypes.find(x=>x.id == this.raceEventTypeId);
    this.raceEvent.raceFormat = this.raceFormats.find(x=>x.id == this.raceFormatId);
    this.raceEvent.location = this.locations.find(x=>x.id == this.locationId);

    if (this.raceEvent.hasEmptyId){

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

  get isRace(): boolean {
    
    return this.raceEventTypeId == null || this.raceEventTypeId == RaceEventTypeModel.raceId;

  }
  
}
