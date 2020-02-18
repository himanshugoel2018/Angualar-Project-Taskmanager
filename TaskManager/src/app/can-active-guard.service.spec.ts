import { TestBed } from '@angular/core/testing';

import { CanActiveGuardService } from './can-active-guard.service';

describe('CanActiveGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActiveGuardService = TestBed.get(CanActiveGuardService);
    expect(service).toBeTruthy();
  });
});
