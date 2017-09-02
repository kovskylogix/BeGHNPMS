import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecontactComponent } from './icecontact.component';

describe('IcecontactComponent', () => {
  let component: IcecontactComponent;
  let fixture: ComponentFixture<IcecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
