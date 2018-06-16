import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProfileEditComponent } from './demo-profile-edit.component';

describe('DemoProfileEditComponent', () => {
  let component: DemoProfileEditComponent;
  let fixture: ComponentFixture<DemoProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
