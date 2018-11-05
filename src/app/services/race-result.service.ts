import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { RaceResultModel } from '../types/race-result-model.type';

import { LoggerService } from './logger.service';
import { ErrorService } from './error.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class RaceResultService {

  private raceEventUrl: string = `${environment.dataApiUrl}/api/race`;

  constructor(private http: HttpClient,
              private logger: LoggerService,
              private errorHandler: ErrorService) { }


  getNewRaceResultsSet(raceId: string): Observable<RaceResultModel[]> {

    let url:string = `${this.raceEventUrl}/${raceId}/raceresults/new`;

    return this.http.get<RaceResultModel[]>(url)
                    .retry(3)
                    .catch(err => this.errorHandler.handleError(err));

  }

  getRaceResultsSet(raceId: string): Observable<RaceResultModel[]> {

    let url: string = `${this.raceEventUrl}/${raceId}/raceresults`

    return this.http.get<RaceResultModel[]>(url)
                    .retry(3)
                    .catch(err => this.errorHandler.handleError(err));

  }

}
