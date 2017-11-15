import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NewsItemModel } from '../../../types/news-item-model.type';
import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.scss']
})
export class NewsItemsComponent  {

  private newsItems: NewsItemModel[];
  private title: string = 'News Articles';

  constructor(private route: ActivatedRoute,
              private router: Router,    
              private logger: LoggerService) {

      this.route.data.subscribe(val => {
        //this.logger.log(val);
        this.newsItems = val["newsItemList"];
        //this.logger.log(this.locations);
      });
      
    }

  addNewNewsItem() {

    this.router.navigate(['/admin/newsitems/new']);

  }

}
