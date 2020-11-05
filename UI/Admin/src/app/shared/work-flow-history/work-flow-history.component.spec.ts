import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowHistoryComponent } from './work-flow-history.component';

describe('WorkFlowHistoryComponent', () => {
  let component: WorkFlowHistoryComponent;
  let fixture: ComponentFixture<WorkFlowHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFlowHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFlowHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
