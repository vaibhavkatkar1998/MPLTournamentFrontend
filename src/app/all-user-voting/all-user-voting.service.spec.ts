import { TestBed } from '@angular/core/testing';

import { AllUserVotingService } from './all-user-voting.service';

describe('AllUserVotingService', () => {
  let service: AllUserVotingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllUserVotingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
