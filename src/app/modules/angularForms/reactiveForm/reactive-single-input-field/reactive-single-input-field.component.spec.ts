import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSingleInputFieldComponent } from './reactive-single-input-field.component';

describe('ReactiveSingleInputFieldComponent', () => {
  let component: ReactiveSingleInputFieldComponent;
  let fixture: ComponentFixture<ReactiveSingleInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveSingleInputFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveSingleInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
