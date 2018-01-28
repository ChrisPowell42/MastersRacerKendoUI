import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule, 
         MatInputModule, 
         MatSelectModule, 
         MatCheckboxModule, 
         MatToolbarModule,
         MatGridListModule,
         MatButtonModule,
         MatSidenavModule } from '@angular/material';

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
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule
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
