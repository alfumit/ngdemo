import { TestBed, inject } from '@angular/core/testing';

import { MoscowApiService } from './moscow-api.service';

describe('MoscowApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoscowApiService]
    });
  });

  it('should ...', inject([MoscowApiService], (service: MoscowApiService) => {
    expect(service).toBeTruthy();
  }));
});
