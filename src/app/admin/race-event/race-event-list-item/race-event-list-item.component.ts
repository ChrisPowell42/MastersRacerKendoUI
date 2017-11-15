import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RaceEventModel } from '../../../types/race-event-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-race-event-list-item',
  templateUrl: './race-event-list-item.component.html',
  styleUrls: ['./race-event-list-item.component.scss']
})
export class RaceEventListItemComponent {

  @Input() raceEvent: RaceEventModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService
  ) {}

  onSelectDetails() {

    this.router.navigate(['/admin/raceevents/detail', this.raceEvent.id])
    
  }

  onSelectEdit() {

    this.router.navigate(['/admin/raceevents/edit', this.raceEvent.id])
    
  }

}
