import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlert2Component } from './success-alert2.component';

describe('SuccessAlert2Component', () => {
  let component: SuccessAlert2Component;
  let fixture: ComponentFixture<SuccessAlert2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessAlert2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessAlert2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
