import { Component } from '@angular/core';
import { CompanyData, CompanyDataModel } from '../company-data/company-data';
import { InvoiceItems, InvoiceItem } from '../invoice-items/invoice-items';

@Component({
  selector: 'app-invoice-form',
  imports: [CompanyData, InvoiceItems],
  templateUrl: './invoice-form.html',
  styleUrl: './invoice-form.css'
})
export class InvoiceForm {
  sellerData: CompanyDataModel = {
    name: '',
    taxId: '',
    address: '',
    bankAccount: ''
  };

  buyerData: CompanyDataModel = {
    name: '',
    taxId: '',
    address: '',
    bankAccount: ''
  };

  invoiceItems: InvoiceItem[] = [
    {
      description: '',
      legalBasis: '',
      quantity: 1,
      unit: 'pcs',
      unitPrice: 0,
      total: 0
    }
  ];

  onSellerDataChange(data: CompanyDataModel): void {
    this.sellerData = data;
  }

  onBuyerDataChange(data: CompanyDataModel): void {
    this.buyerData = data;
  }

  onItemsChange(items: InvoiceItem[]): void {
    this.invoiceItems = items;
  }
}
