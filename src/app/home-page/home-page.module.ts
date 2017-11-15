import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@progress/kendo-angular-layout';

import { HomeComponent } from './home/home.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './news-list-item/news-list-item.component';
import { RaceScheduleListComponent } from './race-schedule-list/race-schedule-list.component';
import { RaceScheduleListItemComponent } from './race-schedule-list-item/race-schedule-list-item.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [
    HomeComponent,
    NewsListComponent,
    NewsListItemComponent,
    RaceScheduleListComponent,
    RaceScheduleListItemComponent
  ]
})
export class HomePageModule { }
