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

  onNewsItems(): void {
    this.router.navigate(['/admin/newsitems']);
  }

  onLocations(): void {
    this.router.navigate(['/admin/locations']);
  }

  onSeasons(): void {
    this.router.navigate(['/admin/seasons']);
  }

  onRacers(): void {
    this.router.navigate(['/admin/racers']);
  }

  onRaceEvents(): void {
    this.router.navigate(['/admin/raceevents']);
  }

  onRaceResults(): void {
    this.router.navigate(['/admin/raceresults']);
  }
  
  onAdmin(): void {
    this.router.navigate(['/admin']);
    this.logger.log('Admin Page');
  }

}
