import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RaceResultModel } from '../../../types/race-result-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-racer-result',
  templateUrl: './racer-result.component.html',
  styleUrls: ['./racer-result.component.scss']
})
export class RacerResultComponent {

  @Input() racerResult: RaceResultModel;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private logger: LoggerService) { }

  

}
