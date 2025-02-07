import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingPopupComponent } from './voting-popup.component';

describe('VotingPopupComponent', () => {
  let component: VotingPopupComponent;
  let fixture: ComponentFixture<VotingPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingPopupComponent]
    });
    fixture = TestBed.createComponent(VotingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
