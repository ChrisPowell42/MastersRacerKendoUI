import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SeasonModel } from '../../types/season-model.type';

import { SeasonService } from '../../services/season.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class SeasonResolverService {

  constructor (private ss: SeasonService,
    private error: ErrorService,
    private logger: LoggerService,
    private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SeasonModel> {

    let id = route.paramMap.get('id');
    this.logger.log(id);

    return this.ss.getSeason(id).take(1).map( season => {
      if (season) {
        //this.logger.log('SeasonResolver found season.');
        //this.logger.log(location);
        return season;
      } else {
        this.error.displayError('Season not found.');
        this.router.navigate(['/seasons']);
        return null;
      }
    });

  }    
}
