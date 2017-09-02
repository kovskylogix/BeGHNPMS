import { Component, OnInit, Input } from '@angular/core';
import { VisitService } from '../../shared/_services/visit.service';
import {DictionaryitemsService } from '../../shared/_services/dictionaryitems.service';
import { DictionaryitemsComponent } from './../../dictionaryitems/dictionaryitems.component';
import {Subject, Observable} from 'rxjs/Rx';


@Component({
  selector: 'vitalsign',
  templateUrl: './vitalsign.component.html',
  styleUrls: ['./vitalsign.component.css'],
  providers:[]
})
export class VitalsignComponent implements OnInit {
@Input () visitId;
@Input () visitvitalSigns = [];
@Input () refvitalsigns = [];
jsonObs;

  constructor(dictionaryitemsService: DictionaryitemsService) { 
              dictionaryitemsService.getcachedData()
              .subscribe(data => { this.jsonObs = data;
                this.refvitalsigns = this.jsonObs.vitalsigns;
              });

  }


  ngOnInit() {
    }
  
 getrefvitalsigns(id){
    return this.refvitalsigns.find(x => x.VitalSignID == id);
  }

  getrefvitalsignName(id){
    return this.getrefvitalsigns(id).SignName;
  }

}
