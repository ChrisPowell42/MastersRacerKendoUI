import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NewsItemModel } from '../types/news-item-model.type';

import { NewsItemService } from '../services/news-item.service';
import { ErrorService } from '../services/error.service';
import { LoggerService } from '../services/logger.service';

@Injectable()
export class FrontPageNewsResolverService implements Resolve<NewsItemModel[]>{

  constructor (private ns: NewsItemService,
               private error: ErrorService,
               private logger: LoggerService,
               private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NewsItemModel[]> {

    return this.ns.getNewsItems().map(items => {
      //this.logger.log(items);
      if (items)
        return items;
    });

  }
                
}
