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
import { ErrorService } from './services/error.service';
import { LoggerService } from './services/logger.service';

import { FrontPageNewsResolverService } from './app-routing/front-page-news-resolver.service';
import { NextRaceEventsResolverService } from './app-routing/next-race-events-resolver.service';

// Import the Kendo Modules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

// Bootstrap modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AdminbuttonComponent } from './adminbutton/adminbutton.component';

@NgModule({
    declarations: [
        AppComponent,
        CallbackComponent,
        PageNotFoundComponent,
        NotAuthorizedComponent,
        AdminbuttonComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AdminModule,
        HomePageModule,
        AppRoutingModule,
        NgbModule.forRoot(),

        // Register the modules
        BrowserAnimationsModule,
        ButtonsModule,
        InputsModule,
        LabelModule,
        LayoutModule,
        DialogModule,
        DateInputsModule
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
        LoggerService,
        FrontPageNewsResolverService,
        NextRaceEventsResolverService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }