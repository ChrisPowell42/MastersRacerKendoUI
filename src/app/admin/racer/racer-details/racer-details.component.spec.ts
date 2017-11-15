import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerDetailsComponent } from './racer-details.component';

describe('RacerDetailsComponent', () => {
  let component: RacerDetailsComponent;
  let fixture: ComponentFixture<RacerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
