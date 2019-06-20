import { TestBed } from '@angular/core/testing';

import { KsService } from './ks.service';

describe('KsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KsService = TestBed.get(KsService);
    expect(service).toBeTruthy();
  });
});
