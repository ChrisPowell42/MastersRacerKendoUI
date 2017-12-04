import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceResultRecordingComponent } from './race-result-recording.component';

describe('RaceResultRecordingComponent', () => {
  let component: RaceResultRecordingComponent;
  let fixture: ComponentFixture<RaceResultRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceResultRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceResultRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
