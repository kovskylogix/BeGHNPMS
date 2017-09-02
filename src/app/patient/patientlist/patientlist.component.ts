import { Component, OnInit, Input, Output } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {
  @Input() person;
  
  filterObject ={name:''}

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  OnSelect(person){
    this.router.navigate(['/visit', person.patientid, person]);
  }
}
