import { Component, Input } from '@angular/core';

import { RaceEventModel } from '../../types/race-event-model.type';

@Component({
  selector: 'app-race-schedule-list-item',
  templateUrl: './race-schedule-list-item.component.html',
  styleUrls: ['./race-schedule-list-item.component.scss']
})
export class RaceScheduleListItemComponent {

  @Input() event: RaceEventModel;

  constructor() { }

}
