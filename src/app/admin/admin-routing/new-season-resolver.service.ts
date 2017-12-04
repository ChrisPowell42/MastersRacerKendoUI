import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SeasonModel } from '../../types/season-model.type';

import { SeasonService } from '../../services/season.service';

import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class NewSeasonResolverService implements Resolve<Observable<SeasonModel>> {

  constructor (private ss: SeasonService,
    private error: ErrorService,
    private logger: LoggerService,
    private router: Router) {}

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SeasonModel> {
      
    //this.logger.log("Creating new Season from Resolver");
    return this.ss.newSeason();

  } 
}
