import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceScheduleListComponent } from './race-schedule-list.component';

describe('RaceScheduleListComponent', () => {
  let component: RaceScheduleListComponent;
  let fixture: ComponentFixture<RaceScheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceScheduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
