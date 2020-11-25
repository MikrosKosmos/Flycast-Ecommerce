import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributePossibleValueComponent } from './attribute-possible-value.component';

describe('AttributePossibleValueComponent', () => {
  let component: AttributePossibleValueComponent;
  let fixture: ComponentFixture<AttributePossibleValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributePossibleValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributePossibleValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
