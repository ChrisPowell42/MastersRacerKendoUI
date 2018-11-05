import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunResultComponent } from './run-result.component';

describe('RunResultComponent', () => {
  let component: RunResultComponent;
  let fixture: ComponentFixture<RunResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
