import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AppointmentComponent
  ],
  declarations: [AppointmentComponent]
})
export class AppointmentModule { }
