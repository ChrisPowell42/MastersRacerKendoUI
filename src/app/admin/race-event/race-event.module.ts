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
    RaceEventsComponent, 
    RaceEventListComponent, 
    RaceEventListItemComponent, 
    RaceEventDefaultComponent, 
    RaceEventEditorComponent, 
    RaceEventDetailsComponent
  ]
})
export class RaceEventModule { }
