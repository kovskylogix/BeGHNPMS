import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientinsuranceComponent } from './patientinsurance.component';

describe('PatientinsuranceComponent', () => {
  let component: PatientinsuranceComponent;
  let fixture: ComponentFixture<PatientinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
