import { Component, Injectable,Input,Output,EventEmitter } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import {Http, Response} from '@angular/http';


// Name Service
export interface usersData {
    uID: string,
    profilePic: string,
    username: string,
    email: string,
    platform: string
}



@Injectable()
export class PatientprofileService {
 private patient = [];

  sharingData: Observable<any>

  private _sharingData: BehaviorSubject<any>;

  private dataStore: {
    sharingData: usersData[];
  };


  constructor(private http: Http) {
    this.dataStore = { sharingData: [] };
    this._sharingData = <BehaviorSubject<usersData[]>>new BehaviorSubject([]);
  }

  saveData( userData ) {
    this._sharingData.next(userData); 
  }

  /*
  getData()  {
    console.log('get data function called' +  JSON.stringify( this.sharingData ) );
    return this._sharingData.asObservable();
  }
  */


  getData(res: Response)  {
      return res.json();
  }

  fetchdata(){
    return this.http
      .get('./assets/testdata/fakebackend/patient.json')
      .map(this.getData);
  }


}
