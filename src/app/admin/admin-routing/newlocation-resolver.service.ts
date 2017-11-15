import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { LocationModel } from '../../types/location-model.type';

import { LocationService } from '../../services/location.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class NewLocationResolverService implements Resolve<LocationModel> {

  constructor (private ls: LocationService,
               private error: ErrorService,
               private logger: LoggerService,
               private router: Router) {}

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LocationModel {
     
      //this.logger.log("Creating new Loction from Resolver");
      return this.ls.newLocation();

    }

}
