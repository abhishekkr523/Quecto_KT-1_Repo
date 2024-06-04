import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfSingleInputFieldComponent } from './tdf-single-input-field.component';

describe('TdfSingleInputFieldComponent', () => {
  let component: TdfSingleInputFieldComponent;
  let fixture: ComponentFixture<TdfSingleInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdfSingleInputFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TdfSingleInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
