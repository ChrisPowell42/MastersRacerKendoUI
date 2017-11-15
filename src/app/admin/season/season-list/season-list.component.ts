import { Component, Input } from '@angular/core';

import { SeasonModel } from '../../../types/season-model.type';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss']
})
export class SeasonListComponent  {

  @Input() seasons: SeasonModel[];
  
  constructor() { }


}