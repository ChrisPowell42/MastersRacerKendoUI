import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDefaultComponent } from './location-default.component';

describe('LocationDefaultComponent', () => {
  let component: LocationDefaultComponent;
  let fixture: ComponentFixture<LocationDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
