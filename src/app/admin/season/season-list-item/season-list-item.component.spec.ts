import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonListItemComponent } from './season-list-item.component';

describe('SeasonListItemComponent', () => {
  let component: SeasonListItemComponent;
  let fixture: ComponentFixture<SeasonListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
