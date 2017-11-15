import { Component, Input } from '@angular/core';

import { NewsItemModel } from '../../types/news-item-model.type';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {

  @Input() newsItems: NewsItemModel[];

  constructor() { }

}
