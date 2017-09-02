import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'visit-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css']
})
export class RxComponent implements OnInit {
  @Input () visitId;
  @Input () visitPrescriptions = [];

  prescriptions= [];

  constructor() { }

  ngOnInit() {
    this.prescriptions =[
      {treatmentarea: 'Cardiology/Vascular Diseases', rxname: 'Baycol (cerivastatin sodium)', manufacturer: 'Bayer' , therapy: ' Treatment for high cholesterol' , approveddate: ' Approved June 1997', withdrawdate: ' withdrawn 8/8/01', dosage: '2 X 2 daily' },
      {treatmentarea: 'Endocrinology', rxname: 'Baycol (cerivastatin sodium)', manufacturer: 'Bayer' , therapy: 'Treatment for high cholesterol' , approveddate: ' Approved June 1997', withdrawdate: '', dosage: '1 X 1 daily' },
      {treatmentarea: 'Obstetrics/Gynecology (Women’s Health)', rxname: 'Lo Minastrin (norethindrone acetate,  ethinyl estradiol,  ferrous fumarate)', manufacturer: ' Warner Chilcott' , therapy: ' For the prevention of pregnancy' , approveddate: ' Approved July 2013', withdrawdate: '', dosage: '1 X 3 daily' }

      ]
  }

}
