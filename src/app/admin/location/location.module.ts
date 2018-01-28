// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule, 
         MatToolbarModule, 
         MatInputModule, 
         MatSelectModule,
         MatButtonModule, 
         MatSidenavModule } from '@angular/material';

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
    RouterModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule
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
