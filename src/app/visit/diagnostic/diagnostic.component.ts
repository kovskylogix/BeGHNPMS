import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {
 visitdiagnosis=[];

  constructor() { }

  ngOnInit() {
    this.visitdiagnosis=[
      {CmPCSCode: 'B820', Description: 'Intestinal helminthiasis, unspecified'},
      {CmPCSCode: 'B829', Description: 'Intestinal parasitism, unspecified'}
 
    ]
  }

}
