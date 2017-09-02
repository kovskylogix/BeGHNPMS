import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceholderComponent } from './insuranceholder.component';

describe('InsuranceholderComponent', () => {
  let component: InsuranceholderComponent;
  let fixture: ComponentFixture<InsuranceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
