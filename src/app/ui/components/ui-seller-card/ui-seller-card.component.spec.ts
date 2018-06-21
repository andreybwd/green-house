import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSellerCardComponent } from './ui-seller-card.component';

describe('UiSellerCardComponent', () => {
  let component: UiSellerCardComponent;
  let fixture: ComponentFixture<UiSellerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSellerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSellerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
