import { basemodel } from './base-model.type';

export class SeasonModel extends basemodel {
    
    startYear: number;
    endYear: number;
    notes: string;
    isCurrentSeason: boolean;
    label: string
    
}