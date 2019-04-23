import { TestBed } from '@angular/core/testing';

import { FiboTaskService } from './fibo-task.service';

describe('FiboTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiboTaskService = TestBed.get(FiboTaskService);
    expect(service).toBeTruthy();
  });
});
