import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceEventsComponent } from './race-events.component';

describe('RaceEventsComponent', () => {
  let component: RaceEventsComponent;
  let fixture: ComponentFixture<RaceEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
