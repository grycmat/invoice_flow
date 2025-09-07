import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceItems } from './invoice-items';

describe('InvoiceItems', () => {
    let component: InvoiceItems;
    let fixture: ComponentFixture<InvoiceItems>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [InvoiceItems]
        })
            .compileComponents();

        fixture = TestBed.createComponent(InvoiceItems);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
