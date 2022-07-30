import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDiscountComponent } from './sort-discount.component';

describe('SortDiscountComponent', () => {
  let component: SortDiscountComponent;
  let fixture: ComponentFixture<SortDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
