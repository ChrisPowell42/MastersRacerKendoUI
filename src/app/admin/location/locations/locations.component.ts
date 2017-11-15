import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocationModel } from '../../../types/location-model.type';
import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  providers: [LoggerService]
})
export class LocationsComponent {

  locations: LocationModel[];
  title = 'Locations';

  constructor(private route: ActivatedRoute,
              private router: Router,    
              private logger: LoggerService) {

                this.route.data.subscribe(val => {
                  //this.logger.log(val);
                  this.locations = val["locationsList"];
                  //this.logger.log(this.locations);
                });
                
              }

  addNewLocation() {

    this.router.navigate(['/admin/locations/new']);

  }

}
