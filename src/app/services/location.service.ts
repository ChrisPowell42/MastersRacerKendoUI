import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { LocationModel } from '../types/location-model.type';
import { LoggerService } from './logger.service';
import { ErrorService } from './error.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class LocationService {

    private locationsUrl = '/api/locations';
    private locationUrl = '/api/location';

    constructor(private http: HttpClient,
                private logger: LoggerService,
                private errorHandler: ErrorService) { }

    newLocation(): LocationModel {

        let returnLocation = new LocationModel();
            
        returnLocation.id = null;
        returnLocation.name = "";
        returnLocation.description = "";
        returnLocation.latPos = 0;
        returnLocation.longPos = 0;

        //this.logger.log("Created New Location, LocationService");
        //this.logger.log(returnLocation);

        return returnLocation;

    }

    getLocations(): Observable<LocationModel[]> {

        //this.logger.log('Getting Locations, LocationService');

        return this.http.get<LocationModel[]>(this.locationsUrl)
                        .retry(3)
                        .catch(error => this.errorHandler.handleError(error));

    }

    getLocation(id: string): Observable<LocationModel> {

        //this.logger.log('Getting Location, LocationService');
        //this.logger.log(id);
        
        let url = `${this.locationUrl}/${id}`;

        //this.logger.log(url);

        return this.http.get<LocationModel>(url)
                        .retry(3)
                        .catch(error => this.errorHandler.handleError(error));

    }

    saveLocation(modifiedLocation: LocationModel): Observable<LocationModel> {

        let url = `${this.locationUrl}/${modifiedLocation.id}`;
        
        this.logger.log('Saving Location');
        this.logger.log(url);
        //this.logger.log(modifiedLocation);
        
        return this.http.put<LocationModel>(url, modifiedLocation)
                        .catch(error => this.errorHandler.handleError(error));

    }

    addLocation(newLocation: LocationModel): Observable<LocationModel> {

        return this.http.post<LocationModel>(this.locationUrl, newLocation)
                        .catch(error => this.errorHandler.handleError(error));

    }


}
