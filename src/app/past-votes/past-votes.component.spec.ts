import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastVotesComponent } from './past-votes.component';

describe('PastVotesComponent', () => {
  let component: PastVotesComponent;
  let fixture: ComponentFixture<PastVotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastVotesComponent]
    });
    fixture = TestBed.createComponent(PastVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
