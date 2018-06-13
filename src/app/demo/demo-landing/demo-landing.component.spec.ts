import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLandingComponent } from './demo-landing.component';

describe('DemoLandingComponent', () => {
  let component: DemoLandingComponent;
  let fixture: ComponentFixture<DemoLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
