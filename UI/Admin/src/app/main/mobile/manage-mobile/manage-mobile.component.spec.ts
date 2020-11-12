import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMobileComponent } from './manage-mobile.component';

describe('ManageMobileComponent', () => {
  let component: ManageMobileComponent;
  let fixture: ComponentFixture<ManageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
