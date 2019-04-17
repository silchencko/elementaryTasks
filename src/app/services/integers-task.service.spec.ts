import { TestBed } from '@angular/core/testing';

import { IntegersTaskService } from './integers-task.service';

describe('IntegersTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegersTaskService = TestBed.get(IntegersTaskService);
    expect(service).toBeTruthy();
  });
});
