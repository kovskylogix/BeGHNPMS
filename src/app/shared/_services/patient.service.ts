import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


import {Http} from '@angular/http';


// tutorial source: https://www.youtube.com/watch?v=sVTNaYBVP88
@Injectable()
export class PatientService {

 constructor(private http: Http) { }

    ngOnInit() {
        
    }

    loaddictionaryfile(){
        return this.http
        .get('./assets/testdata/fakebackend/visitvitals.json')
        .map(res => res.json());
    }
 
    loadpatientfile(){
         return this.http
        .get('./assets/testdata/fakebackend/patient.json')
        .map(res => res.json());
    }
   
    loadvisitfile(){
         return this.http
        .get('./assets/testdata/fakebackend/visit.json')
        .map(res => res.json());
    }
   
     loadvisitvitalsfile(){
      return this.http
      .get('./assets/testdata/fakebackend/visitvitals.json')
      .map(res => res.json());

  }

    loadvisitsymptomsfile(){
        return this.http
        .get('./assets/testdata/fakebackend/visitvitals.json')
        .map(res => res.json());

    }
    loadvisitdiagnosisfile(){
        return this.http
        .get('./assets/testdata/fakebackend/visitvitals.json')
        .map(res => res.json());

    }

    loadvisitprognosisfile(){
        return this.http
        .get('./assets/testdata/fakebackend/visitvitals.json')
        .map(res => res.json());

    }
    loadvisitproceduresfile(){
        return this.http
        .get('./assets/testdata/fakebackend/visitvitals.json')
        .map(res => res.json());

    }

    loadvisitlabtestsfile(){
        return this.http
        .get('./assets/testdata/fakebackend/visitvitals.json')
        .map(res => res.json());

    }

    loadvisitrxsfile(){
        return this.http
        .get('./assets/testdata/fakebackend/visitvitals.json')
        .map(res => res.json());

    }

    loadvisitnotesfile(){
        return this.http
        .get('./assets/testdata/fakebackend/visitvitals.json')
        .map(res => res.json());

    }

    loadvisitofficenotesfile(){
        return this.http
        .get('./assets/testdata/fakebackend/visitvitals.json')
        .map(res => res.json());

    }
}