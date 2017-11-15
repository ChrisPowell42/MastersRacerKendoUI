import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NewsItemModel } from '../../../types/news-item-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  templateUrl: './news-item-default.component.html',
  styleUrls: ['./news-item-default.component.scss']
})
export class NewsItemDefaultComponent {

  constructor() {}

}
