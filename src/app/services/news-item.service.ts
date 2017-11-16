import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { NewsItemModel } from '../types/news-item-model.type';
import { LoggerService } from './logger.service';
import { ErrorService } from './error.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class NewsItemService {

  private newsItemsUrl: string = '/api/newsitems';
  private newsItemUrl: string = '/api/newsitem';

  constructor(private http: HttpClient,
    private logger: LoggerService,
    private errorHandler: ErrorService) { }


  newNewsItem(): NewsItemModel {

    let newItem: NewsItemModel = new NewsItemModel();

    newItem.postedBy = "Some user"; // will change to get the current user from the auth service.

    return newItem;

  }

  getNewsItems(): Observable<NewsItemModel[]> {

    return this.http.get<NewsItemModel[]>(this.newsItemsUrl)
                    .retry(3)
                    .catch(err => this.errorHandler.handleError(err));

  }

  getNewsItem(id: string): Observable<NewsItemModel> {

    let url:string = `${this.newsItemUrl}/${id}`;

    return this.http.get<NewsItemModel>(url)
                    .retry(3)
                    .catch(err => this.errorHandler.handleError(err));

  }

  saveNewsItem(changedItem: NewsItemModel): Observable<NewsItemModel> {

    let url:string = `${this.newsItemUrl}/${changedItem.id}`;
    
    return this.http.put<NewsItemModel>(url, changedItem)
                    .catch(err => this.errorHandler.handleError(err));

  }

  addNewsItem(newItem: NewsItemModel): Observable<NewsItemModel> {

    return this.http.post<NewsItemModel>(this.newsItemUrl, newItem)
                    .catch(err => this.errorHandler.handleError(err));
                    
  }

  removeNewsItem(id: string): Observable<boolean> {

    let url:string = `${this.newsItemUrl}/${id}`;
    
    return this.http.delete<boolean>(url)
                    .catch(err => this.errorHandler.handleError(err));
    

  }

}
