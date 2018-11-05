import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerResultComponent } from './racer-result.component';

describe('RacerResultComponent', () => {
  let component: RacerResultComponent;
  let fixture: ComponentFixture<RacerResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacerResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
