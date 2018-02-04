import { RunResultModel } from './run-result-model.type';
import { RacerModel } from './racer-model.type';
import { RaceEventModel } from './race-event-model.type';
import { basemodel } from './base-model.type';

export class RaceResultModel extends basemodel {
    
    raceEventId: string;
    racerId: string;
    totalRaceTime: number;
    isDsqOrDnf: boolean;
    place: number;
    points: number;
    runResults: RunResultModel[];
    raceEvent: RaceEventModel;
    racer: RacerModel;
    
}