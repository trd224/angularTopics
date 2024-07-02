import { TestBed } from '@angular/core/testing';

import { ReqResInterceptorService } from './req-res-interceptor.service';

describe('ReqResInterceptorService', () => {
  let service: ReqResInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqResInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
