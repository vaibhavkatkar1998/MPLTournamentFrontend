import { TestBed } from '@angular/core/testing';

import { MatchTimeTableService } from './match-time-table.service';

describe('MatchTimeTableService', () => {
  let service: MatchTimeTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchTimeTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
