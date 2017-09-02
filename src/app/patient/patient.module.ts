import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientComponent } from './patient.component';
import { PatientinsuranceComponent } from './patientinsurance/patientinsurance.component';
import { NewpatientComponent } from './newpatient/newpatient.component';
import { IcecontactComponent } from './icecontact/icecontact.component';
import { InsuranceholderComponent } from './insuranceholder/insuranceholder.component';
import { ConsentComponent } from './consent/consent.component';
import { EmploymentComponent } from './employment/employment.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { SearchComponent } from '../search/search.component';
import { PatientService } from '../shared/_services/patient.service';



@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    PatientComponent
 
  ],
  providers:[PatientService],
  declarations: [ PatientComponent
                  , NewpatientComponent
                  , IcecontactComponent 
                  , InsuranceholderComponent 
                  , ConsentComponent 
                  , EmploymentComponent 
                  , PatientinsuranceComponent
                  , PatientlistComponent
                  , SearchComponent
                ]
})
export class PatientModule { }
