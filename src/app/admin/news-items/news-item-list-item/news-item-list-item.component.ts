import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoggerService } from '../../../services/logger.service';

import { NewsItemModel } from '../../../types/news-item-model.type';

@Component({
  selector: 'app-news-item-list-item',
  templateUrl: './news-item-list-item.component.html',
  styleUrls: ['./news-item-list-item.component.scss']
})
export class NewsItemListItemComponent {

  @Input() newsItem: NewsItemModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService
  ) {}

  onSelectDetails() {

    this.router.navigate(['/admin/newsitems/detail', this.newsItem.id])
    
  }

  onSelectEdit() {
    this.router.navigate(['/admin/newsitems/edit', this.newsItem.id])
    
  }

}
