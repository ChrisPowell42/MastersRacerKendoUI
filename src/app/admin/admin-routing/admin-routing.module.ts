import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';

import { LocationsComponent } from '../location/locations/locations.component';
import { LocationDefaultComponent } from '../location/location-default/location-default.component';
import { LocationEditorComponent } from '../location/location-editor/location-editor.component';
import { LocationDetailsComponent } from '../location/location-details/location-details.component';

import { LocationsResolverService } from '../admin-routing/locations-resolver.service';
import { LocationResolverService } from '../admin-routing/location-resolver.service';
import { NewLocationResolverService} from '../admin-routing/newlocation-resolver.service';

import { SeasonsComponent } from '../season/seasons/seasons.component';
import { SeasonDefaultComponent } from '../season/season-default/season-default.component';
import { SeasonDetailsComponent } from '../season/season-details/season-details.component';

import { ActiveSeasonResolverService } from '../admin-routing/active-season-resolver.service';
import { SeasonsResolverService } from '../admin-routing/seasons-resolver.service';
import { SeasonResolverService } from '../admin-routing/season-resolver.service';
import { NewSeasonResolverService } from '../admin-routing/new-season-resolver.service';

import { RacersComponent } from '../racer/racers/racers.component';
import { RacerDefaultComponent } from '../racer/racer-default/racer-default.component';
import { RacerEditorComponent } from '../racer/racer-editor/racer-editor.component';
import { RacerDetailsComponent } from '../racer/racer-details/racer-details.component';

import { RacersResolverService } from '../admin-routing/racers-resolver.service';
import { RacerResolverService } from '../admin-routing/racer-resolver.service';
import { NewRacerResolverService } from '../admin-routing/newracer-resolver.service';

import { RaceEventsComponent } from '../race-event/race-events/race-events.component';
import { RaceEventDefaultComponent } from '../race-event/race-event-default/race-event-default.component';
import { RaceEventEditorComponent } from '../race-event/race-event-editor/race-event-editor.component';
import { RaceEventDetailsComponent } from '../race-event/race-event-details/race-event-details.component';

import { RaceEventsResolverService } from '../admin-routing/race-events-resolver.service';
import { RaceEventResolverService } from '../admin-routing/race-event-resolver.service';
import { NewRaceEventResolverService } from '../admin-routing/new-race-event-resolver.service';

import { RaceResultsComponent } from '../race-result/race-results/race-results.component';
import { RaceResultDefaultComponent } from '../race-result/race-result-default/race-result-default.component';
import { RaceResultRecordingComponent } from '../race-result/race-result-recording/race-result-recording.component';

import { NewsItemsComponent } from '../news-items/news-items/news-items.component';
import { NewsItemDefaultComponent } from '../news-items/news-item-default/news-item-default.component';
import { NewsItemDetailsComponent } from '../news-items/news-item-details/news-item-details.component';
import { NewsItemEditorComponent } from '../news-items/news-item-editor/news-item-editor.component';

import { NewsItemsResolverService } from '../admin-routing/news-items-resolver.service';
import { NewsItemResolverService } from '../admin-routing/news-item-resolver.service';
import { NewNewsItemResolverService } from '../admin-routing/new-news-item-resolver.service';

import { RaceSeriesResolverService } from '../admin-routing/race-series-resolver.service';
import { RacePhasesResolverService } from '../admin-routing/race-phases-resolver.service';
import { RaceFormatResolverService } from '../admin-routing/race-format-resolver.service';
import { ArticleTypesResolverService } from '../admin-routing/article-types-resolver.service';
import { RaceEventTypesResolverService } from '../admin-routing/race-event-types-resolver.service';

import { AuthGuardService } from '../../services/auth-guard.service';
import { RaceResultReviewComponent } from '../race-result/race-result-review/race-result-review.component';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] }, 
  { path: 'admin/locations', component: LocationsComponent, canActivate: [AuthGuardService], resolve: { locationsList: LocationsResolverService }, 
      children: [
        { path: '', component: LocationDefaultComponent, canActivate: [AuthGuardService]},
        { path: 'new', component: LocationEditorComponent, canActivate: [AuthGuardService], resolve: {location: NewLocationResolverService}},
        { path: 'edit/:id', component: LocationEditorComponent, canActivate: [AuthGuardService], resolve: {location: LocationResolverService}},
        { path: 'detail/:id', component: LocationDetailsComponent, canActivate: [AuthGuardService], resolve: {location: LocationResolverService}}
      ]},
  { path: 'admin/seasons', component: SeasonsComponent, canActivate: [AuthGuardService], resolve: { seasonsList: SeasonsResolverService }, 
      children: [
        { path: '', component: SeasonDefaultComponent, canActivate: [AuthGuardService]},
        { path: 'detail/:id', component: SeasonDetailsComponent, canActivate: [AuthGuardService], resolve: { season: SeasonResolverService }},
        { path: 'new', component: SeasonDetailsComponent, canActivate: [AuthGuardService], resolve: { season: NewSeasonResolverService }}
      ]},
  { path: 'admin/racers', component: RacersComponent, canActivate: [AuthGuardService], resolve: { racersList: RacersResolverService },
      children: [
        { path: '', component: RacerDefaultComponent, canActivate: [AuthGuardService]},
        { path: 'new', component: RacerEditorComponent, canActivate: [AuthGuardService], resolve: {racer: NewRacerResolverService, raceSeries: RaceSeriesResolverService}},
        { path: 'detail/:id', component: RacerDetailsComponent, canActivate: [AuthGuardService], resolve: {racer: RacerResolverService}},
        { path: 'edit/:id', component: RacerEditorComponent, canActivate: [AuthGuardService], resolve: {racer: RacerResolverService, raceSeries: RaceSeriesResolverService}}
      ]},
  { path: 'admin/newsitems', component: NewsItemsComponent, canActivate: [AuthGuardService], resolve: {newsItemList: NewsItemsResolverService},
      children: [
        { path: '', component: NewsItemDefaultComponent, canActivate: [AuthGuardService]},
        { path: 'new', component: NewsItemEditorComponent, canActivate: [AuthGuardService], resolve: {newsItem: NewNewsItemResolverService, articleTypeList: ArticleTypesResolverService}},
        { path: 'detail/:id', component: NewsItemDetailsComponent, canActivate: [AuthGuardService], resolve: {newsItem: NewsItemResolverService}},
        { path: 'edit/:id', component: NewsItemEditorComponent, canActivate: [AuthGuardService], resolve: {newsItem: NewsItemResolverService, articleTypeList: ArticleTypesResolverService}}
      ]},
  { path: 'admin/raceevents', component: RaceEventsComponent, canActivate: [AuthGuardService], resolve: { raceEventsList: RaceEventsResolverService, activeSeason: ActiveSeasonResolverService},
      children: [
        { path: '', component: RaceEventDefaultComponent, canActivate: [AuthGuardService]},
        { path: 'new', component: RaceEventEditorComponent, canActivate: [AuthGuardService], resolve: { raceEvent: NewRaceEventResolverService,
                                                                                                        activeSeason: ActiveSeasonResolverService, 
                                                                                                        raceFormats: RaceFormatResolverService,
                                                                                                        locationsList: LocationsResolverService,
                                                                                                        raceEventTypes: RaceEventTypesResolverService}},
        { path: 'detail/:id', component: RaceEventDetailsComponent, canActivate: [AuthGuardService], resolve: {raceEvent: RaceEventResolverService}},
        { path: 'edit/:id', component: RaceEventEditorComponent, canActivate: [AuthGuardService], resolve: { raceEvent: RaceEventResolverService,
                                                                                                             activeSeason: ActiveSeasonResolverService, 
                                                                                                             raceFormats: RaceFormatResolverService,
                                                                                                             locationsList: LocationsResolverService,
                                                                                                             raceEventTypes: RaceEventTypesResolverService}}
      ]},
  { path: 'admin/raceresults', component: RaceResultsComponent, canActivate: [AuthGuardService], resolve: { racePhases: RacePhasesResolverService,
                                                                                                            raceEventsList: RaceEventsResolverService,
                                                                                                            activeSeason: ActiveSeasonResolverService},
      children: [
        {path: '', component: RaceResultDefaultComponent, canActivate: [AuthGuardService]},
        {path: 'record/:id', component: RaceResultRecordingComponent, canActivate: [AuthGuardService]},
        {path: 'review/:id', component: RaceResultReviewComponent, canActivate:[AuthGuardService]}
      ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(adminRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuardService]

})
export class AdminRoutingModule { }