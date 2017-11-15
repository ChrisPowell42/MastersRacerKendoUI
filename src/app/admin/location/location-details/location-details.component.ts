import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocationModel } from '../../../types/location-model.type';
//import { LocationService } from '../../../services/location.service';
import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent {

  location: LocationModel;

  constructor(private route: ActivatedRoute,
    //private locationServe: LocationService,
    private logger: LoggerService) {

      this.route.data.subscribe(val => {
        //this.logger.log("LocationDetail Location Load");
        this.location = val["location"];
        //this.logger.log(this.location);
      });
      
    }

}
