import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFeedbackCardComponent } from './ui-feedback-card.component';

describe('UiFeedbackCardComponent', () => {
  let component: UiFeedbackCardComponent;
  let fixture: ComponentFixture<UiFeedbackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFeedbackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFeedbackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
