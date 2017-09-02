import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryitemsComponent } from './dictionaryitems.component';

describe('DictionaryitemsComponent', () => {
  let component: DictionaryitemsComponent;
  let fixture: ComponentFixture<DictionaryitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
