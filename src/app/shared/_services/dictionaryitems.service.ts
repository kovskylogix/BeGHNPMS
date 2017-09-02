import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Http} from '@angular/http';

@Injectable()
export class DictionaryitemsService {
jsonObs;
cachedData;
Refvitalsigns

  constructor(private http: Http) { }

  ngOnInit() {
        
  }
  
 getcachedData() {
    if (this.cachedData) {
      return Observable.of(this.cachedData);
    } else {
      return this.http
            .get('./assets/testdata/fakebackend/dictionaryitems.json')
            .map(res => res.json())
            .do((data) => {
              this.cachedData = data;
              this.jsonObs = data;
            });
    }
  }
 
  loaddictionaryfile(){
      return this.http
      .get('./assets/testdata/fakebackend/dictionaryitems.json')
      .map(res => res.json());
  }

getdata(){
      if (this.jsonObs){
        return this.jsonObs;
      }
      else
         {
          this.loaddictionaryfile()
          .subscribe(data => {this.jsonObs = data; 
          this.Refvitalsigns = this.jsonObs.vitalsigns;
          console.log(this.Refvitalsigns);
          return this.jsonObs;
          });
        }
  }
}