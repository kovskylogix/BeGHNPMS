import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {
  @Input () visitId;
  @Input () visitProcedures = [];

  
  constructor() { }

  ngOnInit() {
  }

}
