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

import { RacersComponent } from './racers/racers.component';
import { RacerListComponent } from './racer-list/racer-list.component';
import { RacerListItemComponent } from './racer-list-item/racer-list-item.component';
import { RacerDefaultComponent } from './racer-default/racer-default.component';
import { RacerDetailsComponent } from './racer-details/racer-details.component';
import { RacerEditorComponent } from './racer-editor/racer-editor.component';

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
    DropDownListModule
  ],
  declarations: [
    RacersComponent, 
    RacerListComponent, 
    RacerListItemComponent, 
    RacerDefaultComponent, 
    RacerDetailsComponent, 
    RacerEditorComponent
  ]
})
export class RacerModule { }
