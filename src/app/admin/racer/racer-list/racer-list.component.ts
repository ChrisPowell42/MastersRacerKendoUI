import { Component, Input } from '@angular/core';

import { RacerModel } from '../../../types/racer-model.type';

@Component({
  selector: 'app-racer-list',
  templateUrl: './racer-list.component.html',
  styleUrls: ['./racer-list.component.scss']
})
export class RacerListComponent {

  @Input() racers: RacerModel[];

  constructor() { }

}
