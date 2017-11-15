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

import { NewsItemsComponent } from './news-items/news-items.component';
import { NewsItemListComponent } from './news-item-list/news-item-list.component';
import { NewsItemListItemComponent } from './news-item-list-item/news-item-list-item.component';
import { NewsItemDefaultComponent } from './news-item-default/news-item-default.component';
import { NewsItemDetailsComponent } from './news-item-details/news-item-details.component';
import { NewsItemEditorComponent } from './news-item-editor/news-item-editor.component';

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
    NewsItemsComponent, 
    NewsItemListComponent, 
    NewsItemListItemComponent, 
    NewsItemDefaultComponent, 
    NewsItemDetailsComponent, 
    NewsItemEditorComponent
  ]
})
export class NewsItemsModule { }
