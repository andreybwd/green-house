import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDetailsEditComponent } from './demo-details-edit.component';

describe('DemoDetailsEditComponent', () => {
  let component: DemoDetailsEditComponent;
  let fixture: ComponentFixture<DemoDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
