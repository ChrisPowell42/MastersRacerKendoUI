import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { RaceEventModel } from '../types/race-event-model.type';
import { SeasonModel } from '../types/season-model.type';
import { RaceFormatModel } from '../types/raceFormat.type';

import { LoggerService } from './logger.service';
import { ErrorService } from './error.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { RaceEventDefaultComponent } from '../admin/race-event/race-event-default/race-event-default.component';

@Injectable()
export class RaceEventService {

  private activeSeasonRacesUrl: string = `${environment.dataApiUrl}/api/raceevents/active`;
  private activeEventOfType: string = `${environment.dataApiUrl}/api/raceevents/active/eventtype`;
  private activeRaceByPhase: string = `${environment.dataApiUrl}/api/raceevents/active/race/phase`;
  private raceEventUrl: string = `${environment.dataApiUrl}/api/raceevent`;
  private nextEventsUrl: string = `${environment.dataApiUrl}/api/raceevents/next`;

  constructor(private http: HttpClient,
              private logger: LoggerService,
              private errorHandler: ErrorService) { }

  getNewRaceEvent(): RaceEventModel {

    let returnValue: RaceEventModel =  new RaceEventModel();

    this.logger.log(returnValue);

    return returnValue;
    
  }

  getRaceEventsForActiveSeason(): Observable<RaceEventModel[]> {

    return this.http.get<RaceEventModel[]>(this.activeSeasonRacesUrl)
                    .retry(3)
                    .catch(err => this.errorHandler.handleError(err));

  }

  getActiveEventsForType(raceEventTypeId:string): Observable<RaceEventModel[]> {

    let url = `${this.activeEventOfType}/${raceEventTypeId}`;

    return this.http.get<RaceEventModel[]>(url)
                    .retry(3)
                    .catch(err => this.errorHandler.handleError(err));

  }

  getActiveRacesForPhaseType(phaseTypeId:string): Observable<RaceEventModel[]> {

    let url = `${this.activeRaceByPhase}/${phaseTypeId}`;

    return this.http.get<RaceEventModel[]>(url)
    .retry(3)
    .catch(err => this.errorHandler.handleError(err));

  }

  getRaceEvent(id:string): Observable<RaceEventModel> {

    let url = `${this.raceEventUrl}/${id}`;

    return this.http.get<RaceEventModel>(url)
                    .retry(3)
                    .catch(err => this.errorHandler.handleError(err));

  }

  getNextRaceEvents(count: number): Observable<RaceEventModel[]> {

    let url = `${this.nextEventsUrl}/${count}`;

    return this.http.get<RaceEventModel[]>(url)
                    .retry(3)
                    .catch(err => this.errorHandler.handleError(err));

  }

  saveRaceEvent(changedEvent: RaceEventModel): Observable<RaceEventModel> {

    let url = `${this.raceEventUrl}/${changedEvent.id}`;

    this.logger.log(changedEvent.scheduledStartTime);
    changedEvent.scheduledStartTime = new Date(changedEvent.scheduledStartTime.toUTCString());
    this.logger.log(changedEvent.scheduledStartTime);
    
    return this.http.put<RaceEventModel>(url, changedEvent)
                    .catch(err => this.errorHandler.handleError(err));

  }

  addRaceEvent(newEvent: RaceEventModel): Observable<RaceEventModel> {

    return this.http.post<RaceEventModel>(this.raceEventUrl, newEvent)
                    .catch(err => this.errorHandler.handleError(err));

  }

}