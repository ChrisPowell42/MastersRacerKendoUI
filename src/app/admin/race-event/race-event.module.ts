import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule, 
         MatToolbarModule, 
         MatInputModule, 
         MatSelectModule,
         MatListModule,
         MatSidenavModule,
         MatButtonModule,
         MatDatepickerModule } from '@angular/material';

import { RaceEventsComponent } from './race-events/race-events.component';
import { RaceEventListComponent } from './race-event-list/race-event-list.component';
import { RaceEventListItemComponent } from './race-event-list-item/race-event-list-item.component';
import { RaceEventDefaultComponent } from './race-event-default/race-event-default.component';
import { RaceEventEditorComponent } from './race-event-editor/race-event-editor.component';
import { RaceEventDetailsComponent } from './race-event-details/race-event-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatDatepickerModule
    ],
  declarations: [
    RaceEventsComponent, 
    RaceEventListComponent, 
    RaceEventListItemComponent, 
    RaceEventDefaultComponent, 
    RaceEventEditorComponent, 
    RaceEventDetailsComponent
  ]
})
export class RaceEventModule { }
