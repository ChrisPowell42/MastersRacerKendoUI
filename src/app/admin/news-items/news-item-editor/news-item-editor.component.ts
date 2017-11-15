import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NewsItemModel } from '../../../types/news-item-model.type';
import { ArticleTypeModel } from '../../../types/article-type-model.type';

import { NewsItemService } from '../../../services/news-item.service';
import { LoggerService } from '../../../services/logger.service';
import { ErrorService } from '../../../services/error.service';
import { ConfirmationService } from '../../../services/confirmation.service';

@Component({
  templateUrl: './news-item-editor.component.html',
  styleUrls: ['./news-item-editor.component.scss']
})
export class NewsItemEditorComponent {

  newsItem: NewsItemModel;
  articleTypes: ArticleTypeModel[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private nis: NewsItemService,
              private cs: ConfirmationService,
              private errorHandler: ErrorService,
              private logger: LoggerService) {

      this.route.data.subscribe(val => {
        this.newsItem = val["newsItem"];
        this.articleTypes = val["articleTypeList"];
      });
      
    }

  onSaveChanges() {

  }

  onCancel() {

    this.router.navigate(['/admin']).then( () => this.router.navigate(['/admin/newsitems']));
    
  }

  onDelete() {
    
    this.cs.okCancel("Delete Article?")
           .subscribe(doit => this.handleDelete(doit));
           
  }

  private handleDelete(doDelete: boolean) {

    if (doDelete) {
      this.logger.log("Do it");
    }
    else {
      this.logger.log("Don't do it.");
    }

  }
}
