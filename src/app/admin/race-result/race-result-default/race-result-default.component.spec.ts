import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceResultDefaultComponent } from './race-result-default.component';

describe('RaceResultDefaultComponent', () => {
  let component: RaceResultDefaultComponent;
  let fixture: ComponentFixture<RaceResultDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceResultDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceResultDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
