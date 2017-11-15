import { Component, Input } from '@angular/core';

import { RaceEventModel } from '../../../types/race-event-model.type';

@Component({
  selector: 'app-race-event-list',
  templateUrl: './race-event-list.component.html',
  styleUrls: ['./race-event-list.component.scss']
})
export class RaceEventListComponent  {

  @Input() raceEvents: RaceEventModel[];

  constructor() { }

}
