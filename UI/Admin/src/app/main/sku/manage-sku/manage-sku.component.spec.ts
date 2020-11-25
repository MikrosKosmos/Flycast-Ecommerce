import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSkuComponent } from './manage-sku.component';

describe('ManageSkuComponent', () => {
  let component: ManageSkuComponent;
  let fixture: ComponentFixture<ManageSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
