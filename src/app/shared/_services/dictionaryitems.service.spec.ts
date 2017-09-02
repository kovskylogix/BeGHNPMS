import { TestBed, inject } from '@angular/core/testing';

import { DictionaryitemsService } from './dictionaryitems.service';

describe('DictionaryitemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictionaryitemsService]
    });
  });

  it('should ...', inject([DictionaryitemsService], (service: DictionaryitemsService) => {
    expect(service).toBeTruthy();
  }));
});
