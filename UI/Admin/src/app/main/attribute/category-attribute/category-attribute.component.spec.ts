import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAttributeComponent } from './category-attribute.component';

describe('CategoryAttributeComponent', () => {
  let component: CategoryAttributeComponent;
  let fixture: ComponentFixture<CategoryAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
