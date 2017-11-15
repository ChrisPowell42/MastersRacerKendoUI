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

import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonListComponent } from './season-list/season-list.component';
import { SeasonListItemComponent } from './season-list-item/season-list-item.component';
import { SeasonDefaultComponent } from './season-default/season-default.component';
import { SeasonDetailsComponent } from './season-details/season-details.component';

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
    SeasonsComponent, 
    SeasonListComponent, 
    SeasonListItemComponent, 
    SeasonDefaultComponent, 
    SeasonDetailsComponent
  ]
})
export class SeasonModule { }
