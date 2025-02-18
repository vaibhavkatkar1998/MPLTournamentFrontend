import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTimeTableComponent } from './match-time-table.component';

describe('MatchTimeTableComponent', () => {
  let component: MatchTimeTableComponent;
  let fixture: ComponentFixture<MatchTimeTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchTimeTableComponent]
    });
    fixture = TestBed.createComponent(MatchTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
