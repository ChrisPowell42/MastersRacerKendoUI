import { basemodel } from './base-model.type';

export class LocationModel extends basemodel {
    
    name: string;
    description: string;
    latPos: number;
    longPos: number;
    
    constructor() {
        super();

        this.name = "";
        this.description = "";
        this.latPos= 0;
        this.longPos = 0;

    }

}