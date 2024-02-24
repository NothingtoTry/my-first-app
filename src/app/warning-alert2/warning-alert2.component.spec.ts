import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAlert2Component } from './warning-alert2.component';

describe('WarningAlert2Component', () => {
  let component: WarningAlert2Component;
  let fixture: ComponentFixture<WarningAlert2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarningAlert2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarningAlert2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
