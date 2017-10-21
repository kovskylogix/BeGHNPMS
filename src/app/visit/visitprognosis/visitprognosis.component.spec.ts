import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitprognosisComponent } from './visitprognosis.component';

describe('VisitprognosisComponent', () => {
  let component: VisitprognosisComponent;
  let fixture: ComponentFixture<VisitprognosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitprognosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitprognosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
