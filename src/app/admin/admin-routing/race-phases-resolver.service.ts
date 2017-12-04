import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RacePhaseModel } from '../../types/racePhase.type';

import { RefDataService } from '../../services/refdata.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class RacePhasesResolverService implements Resolve<RacePhaseModel[]>{

  constructor (private rds: RefDataService,
    private error: ErrorService,
    private logger: LoggerService,
    private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RacePhaseModel[]> {
      
    return this.rds.getRacePhases()
                   .retry(3)
                   .catch(err => this.error.handleError(err));    
  }    

}
