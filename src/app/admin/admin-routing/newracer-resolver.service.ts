import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { RacerModel } from '../../types/racer-model.type';

import { RacerService } from '../../services/racer.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class NewRacerResolverService implements Resolve<RacerModel> {

  constructor (private rs: RacerService,
    private error: ErrorService,
    private logger: LoggerService,
    private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): RacerModel {

    return this.rs.newRacer();

  }    

}