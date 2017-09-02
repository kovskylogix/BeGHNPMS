import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitprocedureComponent } from './visitprocedure.component';

describe('VisitprocedureComponent', () => {
  let component: VisitprocedureComponent;
  let fixture: ComponentFixture<VisitprocedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitprocedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitprocedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
