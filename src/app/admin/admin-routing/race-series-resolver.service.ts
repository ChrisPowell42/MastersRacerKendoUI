import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RaceSeriesModel } from '../../types/raceSeries.type';

import { RefDataService } from '../../services/refdata.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class RaceSeriesResolverService implements Resolve<RaceSeriesModel[]>{

  constructor (private rds: RefDataService,
    private error: ErrorService,
    private logger: LoggerService,
    private router: Router) {}

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RaceSeriesModel[]> {
      
          return this.rds.getRaceSeries()
                         .retry(3)
                         .catch(err => this.error.handleError(err));
      
        }    

}
