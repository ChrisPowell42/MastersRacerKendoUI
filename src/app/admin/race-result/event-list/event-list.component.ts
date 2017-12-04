import { Component, Input } from '@angular/core';

import { RaceEventModel } from '../../../types/race-event-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-admin-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent  {

  @Input() raceEvents: RaceEventModel[];

  constructor(private ls: LoggerService) { }

  hasEvents(): boolean {

    return this.raceEvents != null && this.raceEvents.length > 0;

  }

  logEvents(): void {

    this.ls.log(this.raceEvents);

  }

}
