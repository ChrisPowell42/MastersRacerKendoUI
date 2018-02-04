import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminModule } from './admin/admin.module';
import { HomePageModule } from './home-page/home-page.module';

//Import Routing Modules
import { AppRoutingModule } from './app-routing/app-routing.module';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Services
import { AuthService } from './services/auth.service';
import { LocationService } from './services/location.service';
import { SeasonService } from './services/season.service';
import { RacerService } from './services/racer.service';
import { RaceEventService } from './services/race-event.service';
import { RaceResultService } from './services/race-result.service';
import { NewsItemService } from './services/news-item.service';
import { ConfirmationService } from './services/confirmation.service';
import { RefDataService } from './services/refdata.service';
import { MessageService } from './services/message.service';
import { ErrorService } from './services/error.service';
import { LoggerService } from './services/logger.service';

import { FrontPageNewsResolverService } from './app-routing/front-page-news-resolver.service';
import { NextRaceEventsResolverService } from './app-routing/next-race-events-resolver.service';

import { MatButtonModule, 
         MatCheckboxModule, 
         MatCardModule, 
         MatInputModule, 
         MatSelectModule,
         MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatNativeDateModule,
         MatSnackBarModule } from '@angular/material'

//Components
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AdminbuttonComponent } from './adminbutton/adminbutton.component';
import { OkayCancelDialogComponent } from './okay-cancel-dialog/okay-cancel-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        CallbackComponent,
        PageNotFoundComponent,
        NotAuthorizedComponent,
        AdminbuttonComponent,
        OkayCancelDialogComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AdminModule,
        HomePageModule,
        AppRoutingModule,

        // Register the modules
        BrowserAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatNativeDateModule,
        MatSnackBarModule
    ],
    providers: [
        AuthService,
        LocationService,
        SeasonService,
        RacerService,
        RaceEventService,
        RaceResultService,
        NewsItemService,
        RefDataService,
        ErrorService,
        ConfirmationService,
        MessageService,
        LoggerService,
        FrontPageNewsResolverService,
        NextRaceEventsResolverService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }