import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HplWorkFlowComponent } from './hpl-work-flow.component';

describe('HplWorkFlowComponent', () => {
  let component: HplWorkFlowComponent;
  let fixture: ComponentFixture<HplWorkFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HplWorkFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HplWorkFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
