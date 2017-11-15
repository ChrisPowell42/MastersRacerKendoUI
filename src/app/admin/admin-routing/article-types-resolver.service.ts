import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ArticleTypeModel } from '../../types/article-type-model.type';

import { RefDataService } from '../../services/refdata.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class ArticleTypesResolverService implements Resolve<ArticleTypeModel[]>{

  constructor (private rds: RefDataService,
               private error: ErrorService,
               private logger: LoggerService,
               private router: Router) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticleTypeModel[]> {
      
    return this.rds.getArticleTypes()
                   .retry(3)
                   .catch(err => this.error.handleError(err));
      
  }    

}
