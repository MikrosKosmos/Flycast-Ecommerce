import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDroneComponent } from './view-drone.component';

describe('ViewDroneComponent', () => {
  let component: ViewDroneComponent;
  let fixture: ComponentFixture<ViewDroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
