import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RaceEventModel } from '../../../types/race-event-model.type';
import { RacePhaseModel } from '../../../types/racePhase.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-admin-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent {

  @Input() raceEvent: RaceEventModel;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private logger: LoggerService) { }

  get buttonText(): string {

    if (this.raceEvent.racePhase.id == RacePhaseModel.scheduledId)
    {
      return "Start Recording";
    }
    else if (this.raceEvent.racePhase.id == RacePhaseModel.recordingId)
    {
      return "Continue Recording";
    }
    else 
    {
      return "Review Results";
    }

  }

  nextStep(): void {

    this.logger.log("Next Step clicked");

    if (this.raceEvent.racePhase.id == RacePhaseModel.scheduledId)
    {
      this.router.navigate(['/admin/raceresults/record', this.raceEvent.id, 'new'])      
    }
    else if (this.raceEvent.racePhase.id == RacePhaseModel.recordingId)
    {
      this.router.navigate(['/admin/raceresults/record', this.raceEvent.id])            
    }
    else 
    {
      
    }
        
  }

}
