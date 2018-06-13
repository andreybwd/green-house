import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGreenHouseComponent } from './demo-green-house.component';

describe('DemoGreenHouseComponent', () => {
  let component: DemoGreenHouseComponent;
  let fixture: ComponentFixture<DemoGreenHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoGreenHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGreenHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
