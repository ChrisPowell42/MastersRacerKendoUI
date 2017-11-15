import { Component, Input } from '@angular/core';

import { NewsItemModel } from '../../types/news-item-model.type';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss']
})
export class NewsListItemComponent {

  @Input() newsItem: NewsItemModel;

  constructor() { }

}
