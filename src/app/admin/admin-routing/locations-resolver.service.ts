import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocationModel } from '../../types/location-model.type';

import { LocationService } from '../../services/location.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class LocationsResolverService implements Resolve<LocationModel[]> {

    constructor (private ls: LocationService,
                 private error: ErrorService,
                 private logger: LoggerService,
                 private router: Router) {}

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LocationModel[]> {

        return this.ls.getLocations().map( locations => {
            if (locations) {
                //this.logger.log('LocationListResolver found locations.');
                //this.logger.log(locations);
                return locations;
            }
        });

    }    

}