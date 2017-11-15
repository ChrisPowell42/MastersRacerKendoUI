import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-adminbutton',
  templateUrl: './adminbutton.component.html',
  styleUrls: ['./adminbutton.component.scss']
})
export class AdminbuttonComponent  {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService
) {}

  public data: Array<any> = [
  {
    text: 'News Items',
    click: () => this.router.navigate(['/admin/newsitems'])
  },
  {
    text: 'Locations',
    click: () => this.router.navigate(['/admin/locations'])
  },
  {
    text: 'Seasons',
    click: () => this.router.navigate(['/admin/seasons'])
  },
  {
    text: 'Racers',
    click: () => this.router.navigate(['/admin/racers'])
  },
  {
    text: 'Race Events',
    click: () => this.router.navigate(['/admin/raceevents'])
  }];

  public onAdmin(): void {
    this.router.navigate(['/admin']);
    this.logger.log('Admin Page');
  }

}
