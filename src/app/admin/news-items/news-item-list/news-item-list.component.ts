import { Component, Input } from '@angular/core';

import { NewsItemModel } from '../../../types/news-item-model.type';

@Component({
  selector: 'app-news-item-list',
  templateUrl: './news-item-list.component.html',
  styleUrls: ['./news-item-list.component.scss']
})
export class NewsItemListComponent  {

  @Input() newsItems: NewsItemModel[];

  constructor() { }

}
