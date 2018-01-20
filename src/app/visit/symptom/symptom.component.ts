import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DictionaryitemsService } from '../../shared/_services/dictionaryitems.service';
import { KluniquePipe } from '../../shared/klpipes/klunique.pipe';

@Component({
  selector: 'visitsymptom-component',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.css'],
  providers: [DictionaryitemsService ,KluniquePipe]
})
export class SymptomComponent implements OnInit {

@Output() onSypmtomCategoryChanged:EventEmitter<any> = new EventEmitter();
@Input () locvisitID;
@Input () locvisitSymptoms = [];

isAddNewSymptom = false;
symptomcategory ;

refsymptoms = [];
refsymptomscategory = [];
jsonObs;


 constructor(private dictionaryitemsService: DictionaryitemsService, private kluniquepipe: KluniquePipe) {
              this.dictionaryitemsService.getcachedData()
              .subscribe(data => { this.jsonObs = data;
              this.refsymptoms = this.jsonObs.symptoms;
              this.refsymptomscategory = this.kluniquepipe.transform(this.refsymptoms, 'Category');
              // this.refsymptomscategory = this.refsymptoms
              });

  }

  ngOnInit() {

  }


  onSypmtomCategorySelectChange(symptomCat){
    this.symptomcategory = symptomCat.Category;
    console.log('$$$$$$$$$$$$');
    console.log(symptomCat.Category);
  }

  DescribeSymptom(symptomid){
    return this.refsymptoms.find(x => x.SymptomID === symptomid).Symptom.toString();
  }
}
