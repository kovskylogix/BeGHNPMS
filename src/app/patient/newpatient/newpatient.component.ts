import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { PatientComponent } from '../patient.component';



@Component({
  selector: 'newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css'],
  providers:[PatientComponent]
})
export class NewpatientComponent implements OnInit {
 
 @Input() patient;
 newPatient;

 @Output() onSubmitted:EventEmitter<any> = new EventEmitter();
 @Output() onCancel:EventEmitter<any> = new EventEmitter();

 constructor(){
 }

 ngOnInit() {
 }
    
    
 onSubmit(newPatient){
   this.onSubmitted.emit(newPatient);
 }

 Cancel(){
   this.onCancel.emit();
 }


}
