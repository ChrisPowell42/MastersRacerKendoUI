import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationModule } from './location/location.module';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { SeasonModule } from './season/season.module';
import { RacerModule } from './racer/racer.module';
import { RaceEventModule } from './race-event/race-event.module';
import { NewsItemsModule } from './news-items/news-items.module';
import { RaceResultModule} from './race-result/race-result.module';

import { ActiveLocationsResolverService } from './admin-routing/active-locations-resolver.service';
import { LocationsResolverService } from './admin-routing/locations-resolver.service';
import { LocationResolverService } from './admin-routing/location-resolver.service';
import { NewLocationResolverService } from './admin-routing/newlocation-resolver.service';

import { SeasonsResolverService } from './admin-routing/seasons-resolver.service';
import { SeasonResolverService } from './admin-routing/season-resolver.service';
import { ActiveSeasonResolverService } from './admin-routing/active-season-resolver.service';
import { NewSeasonResolverService } from './admin-routing/new-season-resolver.service';

import { RacersResolverService } from './admin-routing/racers-resolver.service';
import { RacerResolverService } from './admin-routing/racer-resolver.service';
import { NewRacerResolverService } from './admin-routing/newracer-resolver.service';

import { RaceEventResolverService } from './admin-routing/race-event-resolver.service';
import { RaceEventsResolverService } from './admin-routing/race-events-resolver.service';
import { NewRaceEventResolverService } from './admin-routing/new-race-event-resolver.service';

import { RaceSeriesResolverService } from './admin-routing/race-series-resolver.service';
import { RaceFormatResolverService } from './admin-routing/race-format-resolver.service';
import { RacePhasesResolverService } from './admin-routing/race-phases-resolver.service';
import { ArticleTypesResolverService } from './admin-routing/article-types-resolver.service';
import { RaceEventTypesResolverService } from './admin-routing/race-event-types-resolver.service';

import { NewsItemsResolverService } from './admin-routing/news-items-resolver.service';
import { NewsItemResolverService } from './admin-routing/news-item-resolver.service';
import { NewNewsItemResolverService } from './admin-routing/new-news-item-resolver.service';

import { NewRaceResultResolverService } from './admin-routing/new-race-result-resolver.service';
import { RaceResultsResolverService } from './admin-routing/race-results-resolver.service';


@NgModule({
  imports: [
    CommonModule,
    LocationModule,
    SeasonModule,
    RacerModule,
    RaceEventModule,
    NewsItemsModule,
    RaceResultModule,
    AdminRoutingModule
  ],
  declarations: [ AdminComponent ],
  providers: [ 
                ActiveLocationsResolverService,
                LocationsResolverService,
                LocationResolverService,
                NewLocationResolverService,
                RacersResolverService,
                RacerResolverService,
                NewRacerResolverService,
                SeasonsResolverService,
                SeasonResolverService,
                ActiveSeasonResolverService,
                NewSeasonResolverService,
                RaceEventResolverService,
                RaceEventsResolverService,
                NewRaceEventResolverService,
                NewsItemsResolverService,
                NewsItemResolverService,
                NewNewsItemResolverService,
                RaceSeriesResolverService,
                RaceFormatResolverService,
                RacePhasesResolverService,
                ArticleTypesResolverService,
                RaceEventTypesResolverService,
                NewRaceResultResolverService,
                RaceResultsResolverService
             ]
})
export class AdminModule { }
