import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SeasonModel } from '../../../types/season-model.type';
import { SeasonService } from '../../../services/season.service';
import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent {

  seasons: SeasonModel[];
  title = 'Seasons';

  constructor(private route: ActivatedRoute,
              private router: Router,    
              private locationServe: SeasonService,
              private logger: LoggerService) {

                this.route.data.subscribe(val => {
                  //this.logger.log(val);
                  this.seasons = val["seasonsList"];
                  //this.logger.log(this.seasons);
                });
                
              }

  addNewSeason() {

    this.router.navigate(['/admin/seasons/new']);

  }



}
