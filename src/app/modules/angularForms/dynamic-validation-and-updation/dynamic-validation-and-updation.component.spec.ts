import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicValidationAndUpdationComponent } from './dynamic-validation-and-updation.component';

describe('DynamicValidationAndUpdationComponent', () => {
  let component: DynamicValidationAndUpdationComponent;
  let fixture: ComponentFixture<DynamicValidationAndUpdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicValidationAndUpdationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicValidationAndUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
