import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTotals } from './invoice-totals';

describe('InvoiceTotals', () => {
  let component: InvoiceTotals;
  let fixture: ComponentFixture<InvoiceTotals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceTotals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceTotals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
