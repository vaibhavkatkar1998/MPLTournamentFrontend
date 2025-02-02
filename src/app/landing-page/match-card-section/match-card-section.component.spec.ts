import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCardSectionComponent } from './match-card-section.component';

describe('MatchCardSectionComponent', () => {
  let component: MatchCardSectionComponent;
  let fixture: ComponentFixture<MatchCardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchCardSectionComponent]
    });
    fixture = TestBed.createComponent(MatchCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
