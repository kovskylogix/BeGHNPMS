import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {
  @Input () locVisitID;
  @Input () visitProcedures = [];

  
  constructor() { }

  ngOnInit() {
  }

}
