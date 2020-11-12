import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMobileComponent } from './view-mobile.component';

describe('ViewMobileComponent', () => {
  let component: ViewMobileComponent;
  let fixture: ComponentFixture<ViewMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
