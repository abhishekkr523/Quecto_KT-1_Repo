import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfWholeFormComponent } from './tdf-whole-form.component';

describe('TdfWholeFormComponent', () => {
  let component: TdfWholeFormComponent;
  let fixture: ComponentFixture<TdfWholeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdfWholeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TdfWholeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
