import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemDefaultComponent } from './news-item-default.component';

describe('NewsItemDefaultComponent', () => {
  let component: NewsItemDefaultComponent;
  let fixture: ComponentFixture<NewsItemDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
