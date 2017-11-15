import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RaceEventModel } from '../../types/race-event-model.type';

import { RaceEventService } from '../../services/race-event.service';
import { ErrorService } from '../../services/error.service';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class RaceEventsResolverService implements Resolve<RaceEventModel[]> {

    constructor (private res: RaceEventService,
                 private error: ErrorService,
                 private logger: LoggerService,
                 private router: Router) {}

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RaceEventModel[]> {

        return this.res.getRaceEventsForActiveSeason().map(raceEvents => {
            if (raceEvents) {
                return raceEvents;
            }
        });

    }    

}