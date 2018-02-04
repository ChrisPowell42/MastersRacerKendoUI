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
  articleTypeId: string;
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
        if (this.newsItem.articleType != null)
          this.articleTypeId = this.newsItem.articleType.id;
        else
          this.articleTypeId = null;
      });
      
    }

  onSaveChanges() {

    this.logger.log(this.newsItem);

    this.newsItem.articleType = this.articleTypes.find(x=>x.id == this.articleTypeId);

    if (this.newsItem.hasEmptyId) {
      this.nis.addNewsItem(this.newsItem).subscribe( res => {
        this.logger.log(res);
        this.router.navigate(['/admin']).then( () => this.router.navigate([`/admin/newsitems/detail/${res.id}`]));        
      });
    }
    else {      
      this.nis.saveNewsItem(this.newsItem).subscribe( res => {
        this.router.navigate(['/admin']).then( () => this.router.navigate([`/admin/newsitems/detail/${this.newsItem.id}`]));        
      });
    }

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
      this.nis.removeNewsItem(this.newsItem.id).subscribe( res => {
        this.router.navigate(['/admin']).then( () => this.router.navigate(['/admin/newsitems']));
      });
    }
    else {
      this.logger.log("Don't do it.");
    }

  }
}
