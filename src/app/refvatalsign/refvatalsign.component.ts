import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'refvatalsign',
  templateUrl: './refvatalsign.component.html',
  styleUrls: ['./refvatalsign.component.css']
})
export class RefvatalsignComponent implements OnInit {
  vitalsigns= [];
 @Output() vitals;

  constructor() { }

  ngOnInit() {
    this.vitalsigns = [
      { id: '1', name: 'Blood Glucose level' , vitsigndatatype: 'NULL' , group: 'Fifth' },
      { id: '2', name: 'Blood pressure' , vitsigndatatype: 'NULL' , group: 'Primary' },
      { id: '3', name: 'Body temperature' , vitsigndatatype: 'NULL' , group: 'Primary' },
      { id: '4', name: 'End-tidal CO2' , vitsigndatatype: 'NULL' , group: 'Sixth' },
      { id: '5', name: 'Functional status' , vitsigndatatype: 'NULL' , group: 'Sixth' },
      { id: '6', name: 'Gait speed' , vitsigndatatype: 'NULL' , group: 'Sixth' },
      { id: '7', name: 'Glasgow Coma Scale' , vitsigndatatype: 'NULL' , group: 'Fifth' },
      { id: '8', name: 'Menstural Cycle' , vitsigndatatype: 'NULL' , group: 'Fifth' },
      { id: '9', name: 'Pain' , vitsigndatatype: 'NULL' , group: 'Fifth' },
      { id: '10', name: 'Pulse Oximetry' , vitsigndatatype: 'NULL' , group: 'Fifth' },
      { id: '11', name: 'Pulse rate' , vitsigndatatype: 'NULL' , group: 'Primary' },
      { id: '12', name: 'Pupil Dilation' , vitsigndatatype: 'NULL' , group: 'Other' },
      { id: '13', name: 'Respiration rate' , vitsigndatatype: 'NULL' , group: 'Primary' },
      { id: '14', name: 'Shortness of breath' , vitsigndatatype: 'NULL' , group: 'Sixth' },
      { id: '15', name: 'Skin Color' , VitSignDataType: 'NULL' , group: 'Other' }
    ]
  }

}
