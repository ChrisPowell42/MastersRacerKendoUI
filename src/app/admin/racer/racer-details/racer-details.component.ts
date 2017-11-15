import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RacerModel } from '../../../types/racer-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './racer-details.component.html',
  styleUrls: ['./racer-details.component.scss']
})
export class RacerDetailsComponent {

  private racer: RacerModel;

  constructor(private route: ActivatedRoute,
              private logger: LoggerService) {

                this.route.data.subscribe(val => {
                  this.racer = val["racer"];
                });
          
              }

}
