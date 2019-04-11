import { TestBed } from '@angular/core/testing';

import { ChessTaskService } from './chess-task.service';

describe('ChessTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChessTaskService = TestBed.get(ChessTaskService);
    expect(service).toBeTruthy();
  });
});
