import { TestBed } from '@angular/core/testing';

import { PremiereService } from './premiere.service';

describe('PremiereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PremiereService = TestBed.get(PremiereService);
    expect(service).toBeTruthy();
  });
});
