import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoggerService } from '../../../services/logger.service';

import { LocationModel } from '../../../types/location-model.type';

@Component({
  selector: 'app-location-list-item',
  templateUrl: './location-list-item.component.html',
  styleUrls: ['./location-list-item.component.scss']
})
export class LocationListItemComponent {

  @Input() location: LocationModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService
  ) {}

  onSelectDetails() {
  
    this.router.navigate(['/admin/locations/detail', this.location.id])
  
  }
  
  onSelectEdit() {
          
    this.router.navigate(['/admin/locations/edit', this.location.id]);
  
  }
}
