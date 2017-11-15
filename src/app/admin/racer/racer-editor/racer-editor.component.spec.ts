import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerEditorComponent } from './racer-editor.component';

describe('RacerEditorComponent', () => {
  let component: RacerEditorComponent;
  let fixture: ComponentFixture<RacerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacerEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
