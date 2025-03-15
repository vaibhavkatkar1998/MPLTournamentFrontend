import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserVotingComponent } from './all-user-voting.component';

describe('AllUserVotingComponent', () => {
  let component: AllUserVotingComponent;
  let fixture: ComponentFixture<AllUserVotingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUserVotingComponent]
    });
    fixture = TestBed.createComponent(AllUserVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
