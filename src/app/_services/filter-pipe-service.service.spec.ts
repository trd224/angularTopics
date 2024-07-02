import { TestBed } from '@angular/core/testing';

import { FilterPipeServiceService } from './filter-pipe-service.service';

describe('FilterPipeServiceService', () => {
  let service: FilterPipeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPipeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
