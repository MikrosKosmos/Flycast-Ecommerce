import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePuctureSkuComponent } from './create-pucture-sku.component';

describe('CreatePuctureSkuComponent', () => {
  let component: CreatePuctureSkuComponent;
  let fixture: ComponentFixture<CreatePuctureSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePuctureSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePuctureSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
