import { SeasonModel } from './season-model.type';
import { LocationModel } from './location-model.type';
import { RaceFormatModel } from './raceFormat.type';
import { RacePhaseModel } from './racePhase.type';
import { RaceEventTypeModel } from './raceEventType.type';
import { basemodel } from './base-model.type';

export class RaceEventModel extends basemodel {
            
        runCount: number;
        notes: string;
        raceName: string;
        scheduledStartTime: Date;
    
        season: SeasonModel;
        location: LocationModel;
        raceFormat: RaceFormatModel;
        racePhase: RacePhaseModel;
        raceEventType: RaceEventTypeModel;

        constructor() {
            super();

            this.runCount = 2;
            this.notes = "";
            this.raceName = "";
            this.scheduledStartTime = null;

            this.season = null;
            this.location = null;
            this.raceFormat = null;
            this.racePhase = null;
            this.raceEventType = null;
        }
    }