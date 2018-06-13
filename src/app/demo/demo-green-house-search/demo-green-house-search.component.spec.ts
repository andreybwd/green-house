import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGreenHouseSearchComponent } from './demo-green-house-search.component';

describe('DemoGreenHouseSearchComponent', () => {
  let component: DemoGreenHouseSearchComponent;
  let fixture: ComponentFixture<DemoGreenHouseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoGreenHouseSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGreenHouseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
