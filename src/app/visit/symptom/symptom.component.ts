import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DictionaryitemsService } from '../../shared/_services/dictionaryitems.service';
import { KluniquePipe } from '../../shared/klpipes/klunique.pipe';

@Component({
  selector: 'visitsymptom',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.css'],
  providers: [DictionaryitemsService ,KluniquePipe]
})
export class SymptomComponent implements OnInit {

@Output() onSypmtomCategoryChanged:EventEmitter<any> = new EventEmitter();
@Input () visitId;
@Input () visitSymptoms = [];

isAddNewSymptom: boolean = false;
symptomcategory ;

refsymptoms = [];
refsymptomscategory = [];
jsonObs;


 constructor(private dictionaryitemsService: DictionaryitemsService, private kluniquepipe: KluniquePipe) { 
              this.dictionaryitemsService.getcachedData()
              .subscribe(data => { this.jsonObs = data;
              this.refsymptoms = this.jsonObs.symptoms;
              this.refsymptomscategory = this.kluniquepipe.transform(this.refsymptoms, 'Category'); 
              
              //this.refsymptomscategory = this.refsymptoms
              console.log("In Symptoms component ..." );
              console.log(this.refsymptoms );
              console.log(this.refsymptomscategory );
              });

  }

  ngOnInit() {
      this.visitSymptoms = [
      { visitid: '1', visitsymptomarea: 'Gastrointestinal', symptom:'vomiting (R11)', severity: 'mild', history: 'week' },
      { visitid: '1', visitsymptomarea: 'Gastrointestinal', symptom:'nausea (R11)', severity: 'mild', history: 'week' }
    ]
  }


onSypmtomCategorySelectChange(symptomCat){
  this.symptomcategory = symptomCat.Category;
  console.log("$$$$$$$$$$$$");
  console.log(symptomCat.Category);
}
}
