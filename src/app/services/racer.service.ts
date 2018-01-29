import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { SeasonModel } from '../types/season-model.type';
import { LoggerService } from './logger.service';
import { ErrorService } from './error.service';

import { RacerModel } from '../types/racer-model.type';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class RacerService {

  private racersUrl: string = `${environment.dataApiUrl}/api/racers`;//'https://mastersracerapi.azurewebsites.net/api/racers';
  private racerUrl: string = `${environment.dataApiUrl}/api/racer`;//'https://mastersracerapi.azurewebsites.net/api/racer'

  constructor(private http: HttpClient,
              private logger: LoggerService,
              private errorHandler: ErrorService) { }

    newRacer(): RacerModel {

      let returnRacer = new RacerModel();

      returnRacer.name = "";
      returnRacer.active = true;

      return returnRacer;

    }

    getRacers(): Observable<RacerModel[]> {

      return this.http.get<RacerModel[]>(this.racersUrl)
                      .retry(3)
                      .catch(err => this.errorHandler.handleError(err));

    }

    getRacer(id:string): Observable<RacerModel> {

      let url = `${this.racerUrl}/${id}`;
      
      return this.http.get<RacerModel>(url)
                      .retry(3)
                      .catch(err => this.errorHandler.handleError(err));

    }

    saveRacer(changedRacer: RacerModel): Observable<RacerModel> {

      this.logger.log(changedRacer);

      let url = `${this.racerUrl}/${changedRacer.id}`;
      
      this.logger.log("SaveRacer: RacerService");
      this.logger.log(url);
      this.logger.log(changedRacer);

      return this.http.put<RacerModel>(url, changedRacer)
                      .catch(err => this.errorHandler.handleError(err));

    }

    addRacer(newRacer: RacerModel): Observable<RacerModel> {

      this.logger.log("AddRacer: RacerService");
      this.logger.log(this.racerUrl)
      return this.http.post<RacerModel>(this.racerUrl, newRacer)
                      .catch(err => this.errorHandler.handleError(err));

    }

}
