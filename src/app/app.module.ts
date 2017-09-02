import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';


import { AppRoutingModule} from './app-routing/app-routing.module';
import { routingComponents} from './app-routing/app-routing.module';

import { NavigComponent} from './navig/navig.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { PatientinsuranceComponent } from './patient/patientinsurance/patientinsurance.component';
import { NewpatientComponent } from './patient/newpatient/newpatient.component';


import { VisitComponent } from './visit/visit.component';
import { VitalsignComponent} from './visit/vitalsign/vitalsign.component';
import { DiagnosisComponent } from './visit/diagnosis/diagnosis.component';
import { ProcedureComponent } from './visit/procedure/procedure.component';
import { SymptomComponent } from './visit/symptom/symptom.component';
import { RxComponent } from './visit/rx/rx.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DocumentComponent } from './document/document.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';

import { RefvatalsignComponent } from './refvatalsign/refvatalsign.component';
import { TestpageComponent } from './testpage/testpage.component';
import { PatientlistComponent } from './patient/patientlist/patientlist.component';
import { DictionaryitemsComponent } from './dictionaryitems/dictionaryitems.component';

// services
import { PatientService } from './shared/_services/patient.service';
import { VisitService } from './shared/_services/visit.service';
import {DictionaryitemsService } from './shared/_services/dictionaryitems.service';

//pipes
import { CustomfilterPipe } from './customfilter.pipe';
import { CustomfilterbypatientidPipe } from './customfilterbypatientid.pipe';
import { KlorderbyPipe } from './shared/klpipes/klorderby.pipe';
import { KlorderbyascPipe } from './shared/klpipes/klorderbyasc.pipe';
import { KlorderbydatePipe } from './shared/klpipes/klorderbydate.pipe';
import { KlfiltervisitidPipe } from './shared/klpipes/klfiltervisitid.pipe';
import { KlfilteridPipe } from './shared/klpipes/klfilterid.pipe';
import { FilterrefvitalsignsPipe } from './shared/klpipes/filterrefvitalsigns.pipe';
import { KluniquePipe } from './shared/klpipes/klunique.pipe';
import { KlsymptomfilterPipe } from './shared/klpipes/klsymptomfilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents, 
    NavigComponent,
    RefvatalsignComponent,
    VitalsignComponent,
    DiagnosisComponent,
    ProcedureComponent,
    SymptomComponent,
    RxComponent,
    LoginComponent,
    SearchComponent,
    CustomfilterPipe,        
    TestpageComponent, 
    CustomfilterbypatientidPipe, 
    KlorderbyPipe, 
    KlorderbyascPipe, /*KlorderbydscPipe,*/ 
    KlorderbydatePipe, 
    KlfiltervisitidPipe, 
    KlfilteridPipe, 
    DictionaryitemsComponent, 
    FilterrefvitalsignsPipe, 
    KluniquePipe, KlsymptomfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  
  ],
  providers: [PatientService, VisitService, DictionaryitemsService
  ],
  bootstrap: [AppComponent, [DictionaryitemsComponent]]
  
})
export class AppModule { }
