import { TestBed, inject } from '@angular/core/testing';

import { PatientprofileService } from './patientprofile.service';

describe('PatientprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientprofileService]
    });
  });

  it('should ...', inject([PatientprofileService], (service: PatientprofileService) => {
    expect(service).toBeTruthy();
  }));
});
