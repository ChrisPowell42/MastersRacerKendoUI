import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SeasonModel } from '../../types/season-model.type';

import { SeasonService } from '../../services/season.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class ActiveSeasonResolverService implements Resolve<SeasonModel> {

  constructor (private ss: SeasonService,
               private error: ErrorService,
               private logger: LoggerService,
               private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SeasonModel> {

    return this.ss.getActiveSeason().map( season => {
      if (season) {
        //this.logger.log('SeasonResolver found active season.');
        //this.logger.log(season);
        return season;
      } else {
        this.error.displayError('Active Season not found.');
        //this.router.navigate(['/seasons']);
        return null;
      }
    });

  }    
}
