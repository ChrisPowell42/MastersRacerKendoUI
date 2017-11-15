import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemListItemComponent } from './news-item-list-item.component';

describe('NewsItemListItemComponent', () => {
  let component: NewsItemListItemComponent;
  let fixture: ComponentFixture<NewsItemListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
