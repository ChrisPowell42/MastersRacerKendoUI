import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerDefaultComponent } from './racer-default.component';

describe('RacerDefaultComponent', () => {
  let component: RacerDefaultComponent;
  let fixture: ComponentFixture<RacerDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacerDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
