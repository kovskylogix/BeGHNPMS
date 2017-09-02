import { Component, OnInit, Output, Input } from '@angular/core';
import { PatientService } from '../shared/_services/patient.service';


@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
 
public patients = [];
 person ;

 
 //patient= [];
 isAddingNewPatient:boolean = false
 filtertext;


  constructor(private patientService: PatientService) { 
     this.patientService.loadpatientfile()
     .subscribe(data => { this.patients = data });

  }

 getpatient(){
   return this.patients;
 }

 ngOnInit() {
  
  }

  onSubmit(newPatient){
     this.patients.push(newPatient);
  }

 


}
