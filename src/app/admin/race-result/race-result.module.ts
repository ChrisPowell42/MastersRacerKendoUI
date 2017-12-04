import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import the Kendo Modules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

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
    NgbModule,
    ButtonsModule,
    FormsModule,
    InputsModule,
    LabelModule,
    LayoutModule,    
    DropDownListModule,
    DateInputsModule
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
