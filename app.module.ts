import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//below are imported modules other than the angular-cli packages from the box
import { SettingComponent } from './setting/setting.component';
import { VisitComponent } from './visit/visit.component';
import { PatientregistrationComponent } from './patientregistration/patientregistration.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DocumentComponent } from './document/document.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

 import { RouterModule } from '@angular/router';
 import { AppRoutingModule } from './app-routing/app-routing.module';
 import { routingComponents } from './app-routing/app-routing.module';

import {Ng2BreadcrumbModule} from 'ng2-breadcrumb/ng2-breadcrumb';
import {NavigComponent} from './navig/navig.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigComponent,
    routingComponents,
    SearchComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2BreadcrumbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
