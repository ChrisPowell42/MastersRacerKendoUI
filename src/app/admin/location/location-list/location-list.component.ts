import { Component, Input } from '@angular/core';

import { LocationModel } from '../../../types/location-model.type';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent  {

  @Input() locations: LocationModel[];

  constructor() { }
  
}
