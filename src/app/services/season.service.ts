import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SeasonModel } from '../types/season-model.type';
import { LoggerService } from './logger.service';
import { ErrorService } from './error.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class SeasonService {

  private newSeasonURL = '/api/season/new';
  private activeSeasonURL = '/api/season/active';
  private seasonURL = '/api/season/';
  private seasonsURL = '/api/seasons';

  constructor(private http: HttpClient,
    private logger: LoggerService,
    private errorHandler: ErrorService) { }

  newSeason(): Observable<SeasonModel> {
   
    return this.http.put<SeasonModel>(this.newSeasonURL, {})
                    .catch(err => this.errorHandler.handleError(err));

  }

  getActiveSeason(): Observable<SeasonModel> {

    return this.http.get<SeasonModel>(this.activeSeasonURL)
                    .do(s => s.label = this.getLabel(s) )
                    .retry(3)
                    .catch(err => this.errorHandler.handleError(err));

  }

  getSeasons(): Observable<SeasonModel[]> {

    return this.http.get<SeasonModel[]>(this.seasonsURL)
                    .do(sl => sl.forEach(s => s.label = this.getLabel(s)))
                    .retry(3)
                    .catch(err => this.errorHandler.handleError(err));

  }

  getSeason(id: string): Observable<SeasonModel> {

    let url = `${this.seasonURL}${id}`;
    return this.http.get<SeasonModel>(url)
                    .do(s => s.label = this.getLabel(s) )
                    .retry(3)
                    .catch(err => this.errorHandler.handleError(err));

  }

  makeSeasonActive(id: string): Observable<boolean> {

    let url = `${this.activeSeasonURL}/${id}`;

    return this.http.put<boolean>(url, null)
                    .retry(2)
                    .catch(err => this.errorHandler.handleError(err));
  }

  saveSeason(changedSeason: SeasonModel) {
    
    let url = `${this.seasonURL}${changedSeason.id}`;

    return this.http.put<SeasonModel>(url, changedSeason)
                    .do(s => s.label = this.getLabel(s) )
                    .catch(err => this.errorHandler.handleError(err));

  }

  private getLabel(season: SeasonModel): string {

    return `${season.startYear} - ${season.endYear}`;

  }

}
