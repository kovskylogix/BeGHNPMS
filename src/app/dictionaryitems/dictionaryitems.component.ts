import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {DictionaryitemsService } from '../shared/_services/dictionaryitems.service';
import {Subject, Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-dictionaryitems',
  templateUrl: './dictionaryitems.component.html',
  styleUrls: ['./dictionaryitems.component.css'],
  providers: [DictionaryitemsService]
})
export class DictionaryitemsComponent implements OnInit {
@Output () refvitalsigns = [];
@Output () refsymptoms = [];
@Output () refdiagnosis = [];
jsonObs ;

// this is not working as a singleton component
// the idea is to load data once and through testing add and remove items on array 
// and when the application restarts, bring the orinal json file data
// will revist this as i followed all recommendations for a singleton achitecture.

  constructor(dictionaryitemsService: DictionaryitemsService) {

          dictionaryitemsService.loaddictionaryfile()
          .subscribe(data => {this.jsonObs = data; 
          this.refvitalsigns = this.jsonObs.vitalsigns;
          this.refsymptoms = this.jsonObs.symptoms;
          this.refdiagnosis = this.jsonObs.diagnosis;
          console.log('getting refvitalsigns data from dictionaitemcomponent ...')
          console.log(this.refvitalsigns);
          console.log('out from dictionaitemcomponent ...')
        });
   }

  ngOnInit() {
  }
 
 getrefdata(refdata){
   console.log(this.refvitalsigns)
   console.log('called inside getrefdata with arg');
   console.log(refdata);
   

    switch (refdata) {
        case 'refvitalsigns':
            return  this.refvitalsigns;
        case 'refsymptoms':
            return this.jsonObs.refsymptoms;
        case 'refdiagnosis':
            return this.jsonObs.refdiagnosis;
        default:
          return ['Invalid argument'];
        }
 }

}
