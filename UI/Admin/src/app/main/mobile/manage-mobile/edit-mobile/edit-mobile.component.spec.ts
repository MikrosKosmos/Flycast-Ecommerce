import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMobileComponent } from './edit-mobile.component';

describe('EditMobileComponent', () => {
  let component: EditMobileComponent;
  let fixture: ComponentFixture<EditMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
