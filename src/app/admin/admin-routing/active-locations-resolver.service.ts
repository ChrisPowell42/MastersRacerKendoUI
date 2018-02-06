import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocationModel } from '../../types/location-model.type';

import { LocationService } from '../../services/location.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class ActiveLocationsResolverService implements Resolve<LocationModel[]>{

  constructor (private ls: LocationService,
    private error: ErrorService,
    private logger: LoggerService,
    private router: Router) {}

resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LocationModel[]> {

  return this.ls.getActiveLocations().map( locations => {
      if (locations) {
        //this.logger.log('SeasonResolver found active season.');
        //this.logger.log(season);
        return locations;
      } else {
        this.error.displayError('Active Locations not found.');
        //this.router.navigate(['/seasons']);
        return null;
      }
    });

  }    

}
