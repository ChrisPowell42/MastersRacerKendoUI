import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RacerModel } from '../../../types/racer-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './racers.component.html',
  styleUrls: ['./racers.component.scss']
})
export class RacersComponent  {

  private racers: RacerModel[];
  private title: string = "Racers";

  constructor(private route: ActivatedRoute,
              private router: Router,    
              private logger: LoggerService) {

                this.route.data.subscribe(val => {
                  //this.logger.log(val);
                  this.racers = val["racersList"];
                  //this.logger.log(this.locations);
                });
                
              }

  addNewRacer() {

    this.router.navigate(['/admin/racers/new']);
    
  }

}
