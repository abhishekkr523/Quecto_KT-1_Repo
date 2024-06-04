import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveWholeFormComponent } from './reactive-whole-form.component';

describe('ReactiveWholeFormComponent', () => {
  let component: ReactiveWholeFormComponent;
  let fixture: ComponentFixture<ReactiveWholeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveWholeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveWholeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
