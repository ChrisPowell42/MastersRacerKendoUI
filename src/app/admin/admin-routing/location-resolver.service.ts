import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocationModel } from '../../types/location-model.type';

import { LocationService } from '../../services/location.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class LocationResolverService implements Resolve<LocationModel>{

  constructor (private ls: LocationService,
    private error: ErrorService,
    private logger: LoggerService,
    private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LocationModel> {

    let id = route.paramMap.get('id');
    this.logger.log(id);

    return this.ls.getLocation(id).map( location => {
      if (location) {
        this.logger.log('LocationResolver found location.');
        this.logger.log(location);
        return location;
      } else {
        this.error.displayError('Location not found.');
        this.router.navigate(['/locations']);
        return null;
      }
    });

  }    

}
