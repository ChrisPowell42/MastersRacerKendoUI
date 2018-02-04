import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule,
        MatToolbarModule,
        MatCardModule,
        MatSidenavModule} from '@angular/material';

import { HomeComponent } from './home/home.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './news-list-item/news-list-item.component';
import { RaceScheduleListComponent } from './race-schedule-list/race-schedule-list.component';
import { RaceScheduleListItemComponent } from './race-schedule-list-item/race-schedule-list-item.component';
import { RaceResultsListComponent } from './race-results-list/race-results-list.component';
import { RaceResultsListItemComponent } from './race-results-list-item/race-results-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule
  ],
  declarations: [
    HomeComponent,
    NewsListComponent,
    NewsListItemComponent,
    RaceScheduleListComponent,
    RaceScheduleListItemComponent,
    RaceResultsListComponent,
    RaceResultsListItemComponent
  ]
})
export class HomePageModule { }
