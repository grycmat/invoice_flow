import { Component, input, output, signal, computed, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface CompanyDataModel {
    name: string;
    taxId: string;
    address: string;
    bankAccount?: string;
}

@Component({
    selector: 'app-company-data',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './company-data.html',
    styleUrl: './company-data.css'
})
export class CompanyData {
    title = input('Company Information');
    showBankAccount = input(false);
    companyData = input<CompanyDataModel>({
        name: '',
        taxId: '',
        address: '',
        bankAccount: ''
    });

    companyDataChange = output<CompanyDataModel>();

    companyForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        taxId: new FormControl(''),
        address: new FormControl('', [Validators.required]),
        bankAccount: new FormControl('')
    });

    constructor() {
        effect(() => {
            const inputData = this.companyData();
            this.companyForm.patchValue(inputData, { emitEvent: false });
        });

        this.companyForm.valueChanges.subscribe(value => {
            if (this.companyForm.valid) {
                this.companyDataChange.emit(value as CompanyDataModel);
            }
        });
    }

    get nameControl() {
        return this.companyForm.get('name') as FormControl;
    }

    get taxIdControl() {
        return this.companyForm.get('taxId') as FormControl;
    }

    get addressControl() {
        return this.companyForm.get('address') as FormControl;
    }

    get bankAccountControl() {
        return this.companyForm.get('bankAccount') as FormControl;
    }

    get isFormValid() {
        return this.companyForm.valid;
    }
}
