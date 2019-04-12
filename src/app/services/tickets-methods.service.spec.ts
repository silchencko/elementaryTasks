import { TestBed } from '@angular/core/testing';

import { TicketsMethodsService } from './tickets-methods.service';

describe('TicketsMethodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketsMethodsService = TestBed.get(TicketsMethodsService);
    expect(service).toBeTruthy();
  });
});
