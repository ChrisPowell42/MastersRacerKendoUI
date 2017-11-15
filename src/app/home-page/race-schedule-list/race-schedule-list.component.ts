import { Component, Input } from '@angular/core';

import { RaceEventModel } from '../../types/race-event-model.type';

@Component({
  selector: 'app-race-schedule-list',
  templateUrl: './race-schedule-list.component.html',
  styleUrls: ['./race-schedule-list.component.scss']
})
export class RaceScheduleListComponent {

  @Input() nextEvents: RaceEventModel[];

  constructor() { }
 
}
