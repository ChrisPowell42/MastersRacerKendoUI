import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkayCancelDialogComponent } from './okay-cancel-dialog.component';

describe('OkayCancelDialogComponent', () => {
  let component: OkayCancelDialogComponent;
  let fixture: ComponentFixture<OkayCancelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkayCancelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkayCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
