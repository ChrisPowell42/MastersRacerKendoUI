import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SeasonModel } from '../../types/season-model.type';

import { SeasonService } from '../../services/season.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class SeasonsResolverService implements Resolve<SeasonModel[]> {

  constructor (private seasonService: SeasonService,
               private error: ErrorService,
               private logger: LoggerService,
               private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SeasonModel[]> {

    return this.seasonService.getSeasons().map( seasons => {
      if (seasons) {
        this.logger.log('SeasonsResolver found seasons.');
        this.logger.log(seasons);
        return seasons;
      }
    });

  }    

}
