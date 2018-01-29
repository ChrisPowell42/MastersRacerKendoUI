import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { RaceFormatModel } from '../types/raceFormat.type';
import { RaceSeriesModel } from '../types/raceSeries.type';
import { RacePhaseModel } from '../types/racePhase.type';
import { ArticleTypeModel } from '../types/article-type-model.type';
import { RaceEventTypeModel } from '../types/raceEventType.type';

import { LoggerService } from './logger.service';
import { ErrorService } from './error.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RefDataService {

    constructor(private http: HttpClient,
                private logger: LoggerService,
                private errorHandler: ErrorService) { }

    private raceFormatUrl = `${environment.dataApiUrl}/api/refdata/raceformats`;//'https://mastersracerapi.azurewebsites.net/api/refdata/raceformats';
    private raceSeriesUrl = `${environment.dataApiUrl}/api/refdata/raceseries`;//'https://mastersracerapi.azurewebsites.net/api/refdata/raceseries';
    private racePhasesUrl = `${environment.dataApiUrl}/api/refdata/racephases`;//'https://mastersracerapi.azurewebsites.net/api/refdata/racephases';
    private articleTypesUrl = `${environment.dataApiUrl}/api/refdata/articletypes`;//'https://mastersracerapi.azurewebsites.net/api/refdata/articletypes';
    private raceEventTypesUrl = `${environment.dataApiUrl}/api/refdata/raceeventtypes`;//'https://mastersracerapi.azurewebsites.net/api/refdata/raceeventtypes';

    getRaceFormats(): Observable<RaceFormatModel[]> {

      //this.logger.log('Getting RaceFormats, RefDataService');

      return this.http.get<RaceFormatModel[]>(this.raceFormatUrl)
                      .retry(3)
                      .catch(error => this.errorHandler.handleError(error));
    }

    getRaceSeries(): Observable<RaceSeriesModel[]> {

      //this.logger.log('Getting RaceSeries, RefDataService');

      return this.http.get<RaceSeriesModel[]>(this.raceSeriesUrl)
                      .do(rsa => rsa.forEach( rs => rs.series = `${rs.name} ${rs.gender}`))
                      .retry(3)
                      .catch(error => this.errorHandler.handleError(error));

    }

    getArticleTypes(): Observable<ArticleTypeModel[]> {

      return this.http.get<ArticleTypeModel[]>(this.articleTypesUrl)
                      .retry(3)
                      .catch(error => this.errorHandler.handleError(error));

    }

    getRacePhases(): Observable<RacePhaseModel[]> {

      //this.logger.log('Getting RacePhases, RefDataService');

      return this.http.get<RacePhaseModel[]>(this.racePhasesUrl)
                      .retry(3)
                      .catch(error => this.errorHandler.handleError(error));

    }

    GetScheduledRacePhase(phases: RacePhaseModel[]): RacePhaseModel {

      return phases.find(x => x.id === RacePhaseModel.scheduledId);

    }

    getRaceEventTypes(): Observable<RaceEventTypeModel[]> {

      return this.http.get<RaceEventTypeModel[]>(this.raceEventTypesUrl)
                      .retry(3)
                      .catch(error => this.errorHandler.handleError(error));
    }

}