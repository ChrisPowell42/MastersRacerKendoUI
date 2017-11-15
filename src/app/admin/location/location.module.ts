// Modules
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

// Components
import { LocationsComponent } from './locations/locations.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { LocationDefaultComponent } from './location-default/location-default.component';
import { LocationEditorComponent } from './location-editor/location-editor.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationListComponent } from './location-list/location-list.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    NgbModule,
    ButtonsModule,
    FormsModule,
    InputsModule,
    LabelModule
  ],
  declarations: [
    LocationsComponent, 
    LocationListItemComponent, 
    LocationDefaultComponent, 
    LocationEditorComponent, 
    LocationDetailsComponent, 
    LocationListComponent
  ],
  providers: []
})
export class LocationModule { }
