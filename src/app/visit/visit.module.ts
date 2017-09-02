import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitComponent } from './visit.component';
import { PatientComponent } from '../patient/patient.component';
import { SearchModule } from '../search/search.module';
import { SearchComponent } from '../search/search.component';
import { VitalsignComponent } from './vitalsign/vitalsign.component';
import { SymptomComponent } from './symptom/symptom.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { RxComponent } from './rx/rx.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { VisitprocedureComponent } from './visitprocedure/visitprocedure.component';

import { PatientService } from '../shared/_services/patient.service';

@NgModule({
  imports: [
    CommonModule,
    SearchModule
  
  ],
  exports: [
    VisitComponent
  ],
  providers: [VitalsignComponent, PatientService],
  declarations: [
                VisitComponent, 
                SearchComponent, 
                VitalsignComponent, 
                SymptomComponent, 
                DiagnosisComponent, 
                ProcedureComponent, 
                RxComponent, 
                DiagnosticComponent, 
                VisitprocedureComponent,
                PatientComponent
                ]
})
export class VisitModule { }


