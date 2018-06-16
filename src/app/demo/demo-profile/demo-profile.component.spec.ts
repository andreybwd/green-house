import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProfileComponent } from './demo-profile.component';

describe('DemoProfileComponent', () => {
  let component: DemoProfileComponent;
  let fixture: ComponentFixture<DemoProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
