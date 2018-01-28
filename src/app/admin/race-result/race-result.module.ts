import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule, 
         MatSidenavModule,
         MatToolbarModule, 
         MatInputModule,
         MatButtonModule,
         MatSelectModule } from '@angular/material';

import { EventListComponent } from './event-list/event-list.component';
import { EventListItemComponent } from './event-list-item/event-list-item.component';
import { RaceResultsComponent } from './race-results/race-results.component';
import { RaceResultDefaultComponent } from './race-result-default/race-result-default.component';
import { RaceResultRecordingComponent } from './race-result-recording/race-result-recording.component';
import { RaceResultReviewComponent } from './race-result-review/race-result-review.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule, 
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  declarations: [
    EventListComponent, 
    EventListItemComponent, 
    RaceResultsComponent, 
    RaceResultDefaultComponent, 
    RaceResultRecordingComponent, 
    RaceResultReviewComponent
  ]
})
export class RaceResultModule { }
