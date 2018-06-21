import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiVegetableCardComponent } from './ui-vegetable-card.component';

describe('UiVegetableCardComponent', () => {
  let component: UiVegetableCardComponent;
  let fixture: ComponentFixture<UiVegetableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiVegetableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiVegetableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
