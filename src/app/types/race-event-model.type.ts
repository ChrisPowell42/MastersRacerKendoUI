import { SeasonModel } from './season-model.type';
import { LocationModel } from './location-model.type';
import { RaceFormatModel } from './raceFormat.type';
import { RacePhaseModel } from './racePhase.type';
import { RaceEventTypeModel } from './raceEventType.type';

export class RaceEventModel {
    
        id: string;
        runCount: number;
        notes: string;
        raceName: string;
        scheduledStartTime: Date;
    
        season: SeasonModel;
        location: LocationModel;
        raceFormat: RaceFormatModel;
        racePhase: RacePhaseModel;
        raceEventType: RaceEventTypeModel;    
    }