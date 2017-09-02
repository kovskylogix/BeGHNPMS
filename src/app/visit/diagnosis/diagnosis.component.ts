import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'visitdiagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  @Input () visitId;
  @Input () visitDiagnosis = [];


  visitdiagnosis=[];

  constructor() { }

  ngOnInit() {
    this.visitdiagnosis =[ 
      {cmpcscode: 'B820', description: 'Intestinal helminthiasis, unspecified'},
      {cmpcscode: 'B829', description: 'Intestinal parasitism, unspecified'}
      ]
  }

}
