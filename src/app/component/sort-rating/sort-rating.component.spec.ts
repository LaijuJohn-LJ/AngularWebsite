import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortRatingComponent } from './sort-rating.component';

describe('SortRatingComponent', () => {
  let component: SortRatingComponent;
  let fixture: ComponentFixture<SortRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
