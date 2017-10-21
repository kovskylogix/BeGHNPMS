import { Component, OnInit, Input } from '@angular/core';
import { VisitService } from '../../shared/_services/visit.service';
import {DictionaryitemsService } from '../../shared/_services/dictionaryitems.service';
import { DictionaryitemsComponent } from './../../dictionaryitems/dictionaryitems.component';
import {Subject, Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-visitvitalsign',
  templateUrl: './visitvitalsign.component.html',
  styleUrls: ['./visitvitalsign.component.css'],
  providers:[]
})
export class VitalsignComponent implements OnInit {
@Input () locvisitID;
@Input () locvisitvitalSigns = [];
@Input () refvitalsigns = [];
jsonObs;

  constructor(dictitemsServ: DictionaryitemsService) {
              dictitemsServ.getcachedData()
              .subscribe(data => { this.jsonObs = data;
                this.refvitalsigns = this.jsonObs.vitalsigns;
                console.log()
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
