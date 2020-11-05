import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDroneComponent } from './manage-drone.component';

describe('ManageDroneComponent', () => {
  let component: ManageDroneComponent;
  let fixture: ComponentFixture<ManageDroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
