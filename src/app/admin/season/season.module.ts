// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule, 
         MatSidenavModule,
         MatButtonModule,
         MatToolbarModule } from '@angular/material';

import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonListComponent } from './season-list/season-list.component';
import { SeasonListItemComponent } from './season-list-item/season-list-item.component';
import { SeasonDefaultComponent } from './season-default/season-default.component';
import { SeasonDetailsComponent } from './season-details/season-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule
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
