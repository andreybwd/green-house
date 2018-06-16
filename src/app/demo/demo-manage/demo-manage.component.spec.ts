import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoManageComponent } from './demo-manage.component';

describe('DemoManageComponent', () => {
  let component: DemoManageComponent;
  let fixture: ComponentFixture<DemoManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
