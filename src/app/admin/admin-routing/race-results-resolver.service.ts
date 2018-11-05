import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RaceResultModel } from '../../types/race-result-model.type';

import { RaceResultService } from '../../services/race-result.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class RaceResultsResolverService implements Resolve<RaceResultModel[]>{

  constructor (private rs: RaceResultService,
               private error: ErrorService,
               private logger: LoggerService,
               private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RaceResultModel[]> {

    let id = route.paramMap.get('id');
    this.logger.log(id);

    return this.rs.getRaceResultsSet(id);

  }

}
