import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RaceEventModel } from '../../../types/race-event-model.type';
import { RacePhaseModel } from '../../../types/racePhase.type';
import { SeasonModel } from '../../../types/season-model.type';

import { RaceEventService } from '../../../services/race-event.service';
import { RaceResultService } from '../../../services/race-result.service';
import { ErrorService } from '../../../services/error.service';
import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.scss']
})
export class RaceResultsComponent {

  activeSeason: SeasonModel;
  racePhases: RacePhaseModel[];
  raceEvents: RaceEventModel[];
  filteredEvents: RaceEventModel[];

  selectedPhase: RacePhaseModel;

  title: string = "Race Results";

  constructor(private route: ActivatedRoute,
              private router: Router,
              private res: RaceEventService,
              private rrs: RaceResultService,
              private logger: LoggerService) {

    this.route.data.subscribe(val => {

      this.activeSeason = val["activeSeason"];
      this.racePhases = val["racePhases"];

      this.logger.log(this.activeSeason);
      this.logger.log(this.racePhases);
      
    });
  }

  public selectionChanged(value:RacePhaseModel): void {

    this.logger.log(value);
    this.selectedPhase = value;

    this.applyFilterToEvents(this.selectedPhase);

  }

  applyFilterToEvents(selectedPhase: RacePhaseModel): void {

    this.res.getActiveRacesForPhaseType(selectedPhase.id)
            .subscribe(events => {
              this.raceEvents = events;
              this.logger.log(this.raceEvents);
            });

  }

}
