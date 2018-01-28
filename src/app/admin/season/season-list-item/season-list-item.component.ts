import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoggerService } from '../../../services/logger.service';
import { SeasonService } from '../../../services/season.service';
import { ConfirmationService } from '../../../services/confirmation.service';

import { SeasonModel } from '../../../types/season-model.type';

@Component({
  selector: 'app-season-list-item',
  templateUrl: './season-list-item.component.html',
  styleUrls: ['./season-list-item.component.scss']
})
export class SeasonListItemComponent {

  @Input() season: SeasonModel;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private confirm: ConfirmationService,
    private seasonService: SeasonService,
    private logger: LoggerService
  ) {}

  onSelectDetails() {

    this.router.navigate(['/admin/seasons/detail', this.season.id])  

  }

  onMakeActive() {

    this.confirm.okCancel("Make this season the active season?").subscribe(res => {
      if (res) {
        this.seasonService.makeSeasonActive(this.season.id).subscribe(res => {
          if (res) {
            this.router.navigate(['/admin']).then( (nav) => this.router.navigate(['/admin/seasons/detail', this.season.id]))
          }
        });    
      }
    });

    // this.seasonService.makeSeasonActive(this.season.id).subscribe(res => {
    //   if (res) {
    //     this.router.navigate(['/admin']).then( (nav) => this.router.navigate(['/admin/seasons/detail', this.season.id]))
    //   }
    // });

  }

}
