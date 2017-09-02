import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


import {Http} from '@angular/http';

@Injectable()
export class VisitService {

  constructor(private http: Http) { }

  ngOnInit() {
      
  }

  loadvisitvitalsfile(){
      return this.http
      .get('./assets/testdata/fakebackend/visitvitals.json')
      .map(res => res.json());

  }


}
