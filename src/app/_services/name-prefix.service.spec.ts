import { TestBed } from '@angular/core/testing';

import { NamePrefixService } from './name-prefix.service';

describe('NamePrefixService', () => {
  let service: NamePrefixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamePrefixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
