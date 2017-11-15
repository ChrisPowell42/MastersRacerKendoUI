import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RacerModel } from '../../types/racer-model.type';

import { RacerService } from '../../services/racer.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class RacersResolverService implements Resolve<RacerModel[]> {

  constructor (private ls: RacerService,
    private error: ErrorService,
    private logger: LoggerService,
    private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RacerModel[]> {

    return this.ls.getRacers().map( racers => {
      if (racers) {
        return racers;
      }
    });

  }    

}
