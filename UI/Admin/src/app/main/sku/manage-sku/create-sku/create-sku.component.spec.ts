import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkuComponent } from './create-sku.component';

describe('CreateSkuComponent', () => {
  let component: CreateSkuComponent;
  let fixture: ComponentFixture<CreateSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
