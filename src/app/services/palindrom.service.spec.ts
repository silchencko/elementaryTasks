import { TestBed } from '@angular/core/testing';

import { PalindromService } from './palindrom.service';

describe('PalindromService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PalindromService = TestBed.get(PalindromService);
    expect(service).toBeTruthy();
  });
});
