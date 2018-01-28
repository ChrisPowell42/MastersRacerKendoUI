import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceResultsListComponent } from './race-results-list.component';

describe('RaceResultsListComponent', () => {
  let component: RaceResultsListComponent;
  let fixture: ComponentFixture<RaceResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
