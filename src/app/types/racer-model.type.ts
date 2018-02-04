import { RaceSeriesModel } from './raceSeries.type';
import { basemodel } from './base-model.type';

export class RacerModel extends basemodel {
    
    name: string;
    bibNumber: number;
    active: boolean;
    raceSeries: RaceSeriesModel;
    
    constructor() {
        super();

        this.name = "";
        this.bibNumber = null;
        this.active = true;
        this.raceSeries = null;
        
    }

}