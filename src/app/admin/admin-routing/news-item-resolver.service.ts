import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NewsItemModel } from '../../types/news-item-model.type';
import { NewsItemService } from '../../services/news-item.service';

import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class NewsItemResolverService implements Resolve<NewsItemModel> {

  constructor (private nis: NewsItemService,
    private error: ErrorService,
    private logger: LoggerService,
    private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NewsItemModel> {
      
    let id = route.paramMap.get('id');
    this.logger.log(id);

    return this.nis.getNewsItem(id).map( newsItem => {
      if (newsItem) {
        return newsItem;
      }     
    });          
  }
  
}
