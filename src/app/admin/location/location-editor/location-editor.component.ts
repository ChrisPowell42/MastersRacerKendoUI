import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocationModel } from '../../../types/location-model.type';
import { LocationService } from '../../../services/location.service';
import { LoggerService } from '../../../services/logger.service';
import { ErrorService } from '../../../services/error.service';

@Component({
  templateUrl: './location-editor.component.html',
  styleUrls: ['./location-editor.component.scss']
})
export class LocationEditorComponent {

  location: LocationModel;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private locationServe: LocationService,
              private errorHandler: ErrorService,
              private logger: LoggerService) {

      this.route.data.subscribe(val => {
        //this.logger.log("LocationDetail Location Load");
        this.location = val["location"];
        //this.logger.log(this.location);
      });
      
    }

    cancelChanges() {

      //this.logger.log("Cancelling Edit");

      this.router.navigate(['/admin']).then( () => this.router.navigate(['/admin/locations']));
      
    }

    saveChanges() {

      this.logger.log("Save Changes from Editor");
      this.logger.log(this.location);

      if (this.location.hasEmptyId )
      {
        this.locationServe.addLocation(this.location).subscribe(
          res => {
            this.router.navigate(['/admin']).then( () => this.router.navigate([`/admin/locations/detail/${res.id}`]));
          }
        );
      }
      else {
        this.locationServe.saveLocation(this.location).subscribe(
          res => {
            //this.logger.log("Returned Value:");
            //this.logger.log(res);
            this.router.navigate(['/admin']).then( () => this.router.navigate([`/admin/locations/detail/${this.location.id}`]));
          }
        );
      }
    }

}
