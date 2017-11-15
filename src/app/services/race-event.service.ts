import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { RaceEventModel } from '../types/race-event-model.type';
import { SeasonModel } from '../types/season-model.type';
import { RaceFormatModel } from '../types/raceFormat.type';

import { LoggerService } from './logger.service';
import { ErrorService } from './error.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class RaceEventService {

  private activeSeasonRacesUrl: string = '/api/raceevents/active';
  private raceEventUrl: string = '/api/raceevent';
  private nextEventsUrl: string = '/api/raceevents/next';

  constructor(private http: HttpClient,
              private logger: LoggerService,
              private errorHandler: ErrorService) { }

  getNewRaceEvent(): RaceEventModel {

    return new RaceEventModel();
    
  }

  getRaceEventsForActiveSeason(): Observable<RaceEventModel[]> {

    return this.http.get<RaceEventModel[]>(this.activeSeasonRacesUrl)
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