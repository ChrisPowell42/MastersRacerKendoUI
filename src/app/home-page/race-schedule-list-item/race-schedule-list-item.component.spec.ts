import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceScheduleListItemComponent } from './race-schedule-list-item.component';

describe('RaceScheduleListItemComponent', () => {
  let component: RaceScheduleListItemComponent;
  let fixture: ComponentFixture<RaceScheduleListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceScheduleListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceScheduleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
