import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NewsItemModel } from '../../types/news-item-model.type';
import { RaceEventModel } from '../../types/race-event-model.type';

import { LoggerService } from '../../services/logger.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  newsItems: NewsItemModel[];
  nextEvents: RaceEventModel[];

  constructor(private route: ActivatedRoute,
              private router: Router,    
              private logger: LoggerService) {

      this.route.data.subscribe(val => {
        //this.logger.log(val);
        this.newsItems = val["newsItemsList"];
        this.nextEvents = val["nextEventsList"];
        //this.logger.log(this.newsItems);
      });
      
    }

}
