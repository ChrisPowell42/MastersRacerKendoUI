import { RunResultModel } from './run-result-model.type';
import { RacerModel } from './racer-model.type';
import { RaceEventModel } from './race-event-model.type';

export class RaceResultModel {
    id: string;
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