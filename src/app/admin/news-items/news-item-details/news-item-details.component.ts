import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NewsItemModel } from '../../../types/news-item-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './news-item-details.component.html',
  styleUrls: ['./news-item-details.component.scss']
})
export class NewsItemDetailsComponent {

  newsItem: NewsItemModel;
  
    constructor(private route: ActivatedRoute,
                private logger: LoggerService) {
  
        this.route.data.subscribe(val => {
          this.newsItem = val["newsItem"];
        });
        
      }
  
}
