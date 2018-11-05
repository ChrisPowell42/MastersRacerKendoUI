import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RunResultModel } from '../../../types/run-result-model.type';

import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-run-result',
  templateUrl: './run-result.component.html',
  styleUrls: ['./run-result.component.scss']
})
export class RunResultComponent {

  @Input() runResult: RunResultModel;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private logger: LoggerService) { }

}
