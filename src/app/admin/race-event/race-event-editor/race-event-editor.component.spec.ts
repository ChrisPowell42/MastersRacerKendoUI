import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceEventEditorComponent } from './race-event-editor.component';

describe('RaceEventEditorComponent', () => {
  let component: RaceEventEditorComponent;
  let fixture: ComponentFixture<RaceEventEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceEventEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceEventEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
