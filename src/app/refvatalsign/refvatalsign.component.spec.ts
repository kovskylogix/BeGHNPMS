import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefvatalsignComponent } from './refvatalsign.component';

describe('RefvatalsignComponent', () => {
  let component: RefvatalsignComponent;
  let fixture: ComponentFixture<RefvatalsignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefvatalsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefvatalsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
