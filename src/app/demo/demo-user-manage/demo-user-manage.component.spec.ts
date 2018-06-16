import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoUserManageComponent } from './demo-user-manage.component';

describe('DemoUserManageComponent', () => {
  let component: DemoUserManageComponent;
  let fixture: ComponentFixture<DemoUserManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoUserManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoUserManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
