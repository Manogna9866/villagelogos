import { TestBed } from '@angular/core/testing';

import { LogoserviceService } from './logoservice.service';

describe('LogoserviceService', () => {
  let service: LogoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
