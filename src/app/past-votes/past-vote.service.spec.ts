import { TestBed } from '@angular/core/testing';

import { PastVoteService } from './past-vote.service';

describe('PastVoteService', () => {
  let service: PastVoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastVoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
