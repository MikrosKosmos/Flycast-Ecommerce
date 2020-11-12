import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportOpenTaskComponent } from './support-open-task.component';

describe('SupportOpenTaskComponent', () => {
  let component: SupportOpenTaskComponent;
  let fixture: ComponentFixture<SupportOpenTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportOpenTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportOpenTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
