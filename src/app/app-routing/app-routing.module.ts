import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

//import { NavigComponent } from '../navig/navig.component';
import { HomeComponent } from '../home/home.component';
import { SettingComponent } from '../setting/setting.component';
import { VisitComponent } from '../visit/visit.component';
import { PatientComponent } from '../patient/patient.component';
import { PatientlistComponent } from '../patient/patientlist/patientlist.component';
import { NewpatientComponent } from '../patient/newpatient/newpatient.component';
import { PatientinsuranceComponent } from '../patient/patientinsurance/patientinsurance.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import { DocumentComponent } from '../document/document.component';
import { SearchComponent } from '../search/search.component';
import { AppuserComponent } from '../Appuser/Appuser.component';
import { TestpageComponent } from '../testpage/testpage.component';

import { LoginComponent } from '../login/login.component';



const appRoutes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'appointment', component: AppointmentComponent },
      { path: 'patient',
        children: [
          { path: '', component: PatientComponent},
          { path: 'newpatient', component: NewpatientComponent},
          { path: 'patientinsurance', component: PatientinsuranceComponent}
         ]
      },
      { path: 'visit/:id', component: VisitComponent },
      { path: 'document', component: DocumentComponent },
      { path: 'testpage', component: TestpageComponent },
      { path: 'search', component: SearchComponent },
      { path: 'setting', component: SettingComponent,
        children: [
           { path: '', component: SettingComponent },
           { path: 'user', component: AppuserComponent }
        ], 
     
      },
      { path: 'login', component: LoginComponent }
      
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
     RouterModule
  ],
  declarations: [
  ]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  AppointmentComponent,
                                  PatientComponent,
                                  PatientlistComponent,
                                  NewpatientComponent,
                                  PatientinsuranceComponent,
                                  VisitComponent,
                                  DocumentComponent,
                                  TestpageComponent,
                                  SettingComponent,
                                  HomeComponent,
                                  SearchComponent,
                                  AppuserComponent,
                                  LoginComponent
                                  ]

