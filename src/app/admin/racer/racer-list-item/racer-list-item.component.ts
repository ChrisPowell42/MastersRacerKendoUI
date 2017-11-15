import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RacerModel } from '../../../types/racer-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-racer-list-item',
  templateUrl: './racer-list-item.component.html',
  styleUrls: ['./racer-list-item.component.scss']
})
export class RacerListItemComponent {

  @Input() racer: RacerModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService
  ) {}

  onSelectDetails() {

    this.router.navigate(['/admin/racers/detail', this.racer.id])
    
  }

  onSelectEdit() {

    this.router.navigate(['/admin/racers/edit', this.racer.id])
    
  }

}
