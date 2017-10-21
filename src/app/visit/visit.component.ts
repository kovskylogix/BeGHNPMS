import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { VitalsignComponent } from './visitvitalsign/visitvitalsign.component';
import { SymptomComponent } from './visitsymptom/visitsymptom.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { RxComponent } from './rx/rx.component';
import { PatientComponent } from '../patient/patient.component';
import { PatientService } from '../shared/_services/patient.service';

import { CustomfilterbypatientidPipe } from '../customfilterbypatientid.pipe';
import { KlfiltervisitidPipe } from '../shared/klpipes/klfiltervisitid.pipe';

import { ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css'],
  providers: [ VitalsignComponent, SymptomComponent, DiagnosisComponent, 
              RxComponent, PatientComponent, PatientService,
              // pipes
              CustomfilterbypatientidPipe, KlfiltervisitidPipe
              ]
})

export class VisitComponent implements OnInit {
patients = [];
patientid ;
person;
visitlist;
visitID;

vvisitvitalsigns;
vvisitsymptoms;
vvisitdiagnosis;
vvisitprognosis;
visitprocedures;
visitlabtests;
visitrxs;
visitnotes;
visitofficenotes;

public age: number;

@Output() onVisitIDChanged:EventEmitter<any> = new EventEmitter();
@Output() visits=[];

  constructor(private patientService: PatientService, 
              private activatedRoute: ActivatedRoute,
              private custfilterbypatientid: CustomfilterbypatientidPipe,
              private klfiltervisitid: KlfiltervisitidPipe
              ) { 
    this.patientid = this.activatedRoute.snapshot.params['id'];

    this.patientService.loadpatientfile()
      .subscribe(data => { this.patients = data;
      this.person = custfilterbypatientid.transform(this.patients, this.patientid)[0];
      console.log(this.person);
    });


    this.patientService.loadvisitfile()
     .subscribe(data => { this.visitlist = data;
     this.visits =custfilterbypatientid.transform(this.visitlist, this.patientid);
     console.log(this.visits);
    });

  this.patientService.loadvisitvitalsfile()
     .subscribe(data => { this.vvisitvitalsigns = data;
     console.log('this is the value of data recieved form service');
     console.log(this.vvisitvitalsigns);
     // this.vvisitvitalsigns = klfiltervisitid.transform(this.vvisitvitalsigns, this.visitID);
     console.log('this is the value of this.vvisitvitalsigns');
     console.log(this.vvisitvitalsigns);
  });
 
  this.patientService.loadvisitsymptomsfile()
    .subscribe(data => { this.vvisitsymptoms = data;
     console.log('coming through this.vvisitsymptoms');
     console.log(data);
    // this.vvisitsymptoms = klfiltervisitid.transform(this.vvisitsymptoms, this.visitID);
    console.log(this.vvisitsymptoms);
  });
 
  this.patientService.loadvisitdiagnosisfile()
    .subscribe(data => { this.vvisitdiagnosis = data;
    // this.visitvitalsigns = klfiltervisitid.transform(this.visitvitalsigns, this.visitID);
    console.log(this.vvisitdiagnosis);
  });

 /*
  this.patientService.loadvisitprognosisfile()
    .subscribe(data => { this.visitprognosis = data;
    //this.visitvitalsigns = klfiltervisitid.transform(this.visitvitalsigns, this.visitID);
    console.log(this.visitprognosis);
  });

  this.patientService.loadvisitproceduresfile()
    .subscribe(data => { this.visitprocedures = data;
    // this.visitvitalsigns = klfiltervisitid.transform(this.visitvitalsigns, this.visitID);
    console.log(this.visitprocedures);
  });

  this.patientService.loadvisitlabtestsfile()
    .subscribe(data => { this.visitlabtests = data;
    // this.visitvitalsigns = klfiltervisitid.transform(this.visitvitalsigns, this.visitID);
    console.log(this.visitlabtests);
  });

  this.patientService.loadvisitnotesfile()
    .subscribe(data => { this.visitnotes = data;
    // this.visitvitalsigns = klfiltervisitid.transform(this.visitvitalsigns, this.visitID);
    console.log(this.visitnotes);
  });

  this.patientService.loadvisitofficenotesfile()
    .subscribe(data => { this.visitofficenotes = data;
    // this.visitvitalsigns = klfiltervisitid.transform(this.visitvitalsigns, this.visitID);
    console.log(this.visitofficenotes);
  });
  */
}



  ngOnInit() {
  }

  Onvisithandler(event, newValue) {
   // console.log(newValue.VisitID);
    this.visitID = newValue.VisitID;
    console.log(this.visitID);
    console.log('showing this.vvisitsymptoms in event handler changed');
    console.log(this.vvisitsymptoms);
  }

   public CalculateAge(birthdate): number
     {
         if(birthdate){
            var timeDiff = Math.abs(Date.now() - Number(new Date(birthdate)));
            // Used Math.floor instead of Math.ceil
            // so 26 years and 140 days would be considered as 26, not 27.
            return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        }

        return 0;
    }

}
