import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerListItemComponent } from './racer-list-item.component';

describe('RacerListItemComponent', () => {
  let component: RacerListItemComponent;
  let fixture: ComponentFixture<RacerListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacerListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
