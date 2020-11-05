import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowRouteMapComponent } from './work-flow-route-map.component';

describe('WorkFlowRouteMapComponent', () => {
  let component: WorkFlowRouteMapComponent;
  let fixture: ComponentFixture<WorkFlowRouteMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFlowRouteMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFlowRouteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
