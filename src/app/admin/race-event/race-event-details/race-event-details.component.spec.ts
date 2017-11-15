import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceEventDetailsComponent } from './race-event-details.component';

describe('RaceEventDetailsComponent', () => {
  let component: RaceEventDetailsComponent;
  let fixture: ComponentFixture<RaceEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
