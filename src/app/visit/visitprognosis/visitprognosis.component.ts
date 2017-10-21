import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DictionaryitemsService } from '../../shared/_services/dictionaryitems.service';
import { KluniquePipe } from '../../shared/klpipes/klunique.pipe';


@Component({
  selector: 'app-visitprognosis-component',
  templateUrl: './visitprognosis.component.html',
  styleUrls: ['./visitprognosis.component.css']
})
export class VisitprognosisComponent implements OnInit {
  @Output() onSypmtomCategoryChanged: EventEmitter<any> = new EventEmitter();
  @Input () locvisitID;
  @Input () locvisitPrognosis = [];

  isAddNewPrognosis = false;
  prognosiscategory ;

  refprognosis = [];
  refprognosiscategory = [];
  jsonObs;

  constructor(private dictionaryitemsService: DictionaryitemsService, private kluniquepipe: KluniquePipe) {
    this.dictionaryitemsService.getcachedData()
    .subscribe(data => { this.jsonObs = data;
    this.refprognosis = this.jsonObs.symptoms;
    // this.refprognosiscategory = this.kluniquepipe.transform(this.refprognosis, 'Category');
    // this.refsymptomscategory = this.refsymptoms
    console.log('In Symptoms component ...' );
    console.log(this.refprognosis );
    console.log(this.refprognosiscategory );
    console.log(this.locvisitPrognosis);
    }); }

  ngOnInit() {
  }

  onSypmtomCategorySelectChange(prognosisCat) {
    this.prognosiscategory = prognosisCat.Category;
  }

  describeSypmtom(id) {
      return (this.refprognosis.find(x => x.PrognosisID == id)).prognosis;
  }

}
