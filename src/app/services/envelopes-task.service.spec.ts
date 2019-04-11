import { TestBed } from '@angular/core/testing';

import { EnvelopesTaskService } from './envelopes-task.service';

describe('EnvelopesTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvelopesTaskService = TestBed.get(EnvelopesTaskService);
    expect(service).toBeTruthy();
  });
});
