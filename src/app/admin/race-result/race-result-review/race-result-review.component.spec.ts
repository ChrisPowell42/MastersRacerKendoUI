import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceResultReviewComponent } from './race-result-review.component';

describe('RaceResultReviewComponent', () => {
  let component: RaceResultReviewComponent;
  let fixture: ComponentFixture<RaceResultReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceResultReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceResultReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
