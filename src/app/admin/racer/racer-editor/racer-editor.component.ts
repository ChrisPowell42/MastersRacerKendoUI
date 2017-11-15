import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RacerModel } from '../../../types/racer-model.type';
import { RaceSeriesModel } from '../../../types/raceSeries.type';

import { LoggerService } from '../../../services/logger.service';
import { RacerService } from '../../../services/racer.service';

@Component({
  templateUrl: './racer-editor.component.html',
  styleUrls: ['./racer-editor.component.scss']
})
export class RacerEditorComponent  {

  racer: RacerModel;
  raceSeries: RaceSeriesModel[];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private racerService: RacerService,
                private logger: LoggerService) {

      this.route.data.subscribe(val => {
        this.racer = val["racer"];
        this.raceSeries = val["raceSeries"];
      });
      
    }

  cancelChanges() {

    this.logger.log("Cancelling Edit");
    
    this.router.navigate(['/admin']).then( () => this.router.navigate(['/admin/racers']));
    
  }

  saveChanges() {

    this.logger.log(this.racer);

    if (this.racer.id == null)
    {
      this.logger.log("Pre-AddRacer");
      this.racerService.addRacer(this.racer).subscribe(
        res => {
          this.router.navigate(['/admin']).then( () => this.router.navigate([`/admin/racers/detail/${res.id}`]));
        }
      );

    }
    else {
      this.logger.log("Pre-SaveRacer");
      this.racerService.saveRacer(this.racer).subscribe(
        res => {
          this.router.navigate(['/admin']).then( () => this.router.navigate([`/admin/racers/detail/${this.racer.id}`]));
        }
      );

    }

  }

}
