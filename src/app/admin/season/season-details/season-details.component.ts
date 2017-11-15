import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SeasonModel } from '../../../types/season-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss']
})
export class SeasonDetailsComponent {

  private season: SeasonModel;

  constructor(private route: ActivatedRoute,
              private logger: LoggerService) {

      this.route.data.subscribe(val => {
        this.season = val["season"];
      });

    }

}
