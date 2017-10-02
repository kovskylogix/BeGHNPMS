import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visitprocedure',
  templateUrl: './visitprocedure.component.html',
  styleUrls: ['./visitprocedure.component.css']
})
export class VisitprocedureComponent implements OnInit {
  @Input () locVisitID;
  @Input () visitProcedures = [];

  constructor() { }

  ngOnInit() {
  }

}
