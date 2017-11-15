import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonDefaultComponent } from './season-default.component';

describe('SeasonDefaultComponent', () => {
  let component: SeasonDefaultComponent;
  let fixture: ComponentFixture<SeasonDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
