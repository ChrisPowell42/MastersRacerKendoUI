import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceResultsListItemComponent } from './race-results-list-item.component';

describe('RaceResultsListItemComponent', () => {
  let component: RaceResultsListItemComponent;
  let fixture: ComponentFixture<RaceResultsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceResultsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceResultsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
