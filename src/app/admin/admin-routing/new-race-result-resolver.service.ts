import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RaceResultModel } from '../../types/race-result-model.type';

import { RaceResultService } from '../../services/race-result.service';

import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class NewRaceResultResolverService implements Resolve<Observable<RaceResultModel[]>> {

  constructor (private res: RaceResultService,
               private error: ErrorService,
               private logger: LoggerService,
               private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RaceResultModel[]> { 

    let id: string = route.paramMap.get('id');
    this.logger.log(`NewRaceResultResolverService: ${id}`)

    var result =  this.res.getNewRaceResultsSet(id);

    return result;

  }

}
