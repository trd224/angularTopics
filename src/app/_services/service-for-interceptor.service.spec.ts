import { TestBed } from '@angular/core/testing';

import { ServiceForInterceptorService } from './service-for-interceptor.service';

describe('ServiceForInterceptorService', () => {
  let service: ServiceForInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceForInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
