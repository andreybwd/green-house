import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGreenHouseGridComponent } from './demo-green-house-grid.component';

describe('DemoGreenHouseGridComponent', () => {
  let component: DemoGreenHouseGridComponent;
  let fixture: ComponentFixture<DemoGreenHouseGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoGreenHouseGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGreenHouseGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
