import { basemodel } from './base-model.type';

export class RunResultModel extends basemodel {

    raceResultId: string;
    runIdx: number;
    runTime: number;
    isDSQ: boolean;
    isDNF: boolean;

    constructor() {
        super();

        this.raceResultId = basemodel.emptyId;
    }
}