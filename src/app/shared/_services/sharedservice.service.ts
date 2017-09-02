import { Injectable } from '@angular/core';
import { PatientprofileService } from './patientprofile.service';
import { PatientService } from './patient.service';

@Injectable()
export class SharedserviceService {

  constructor(patientService : PatientService ) { }

}
