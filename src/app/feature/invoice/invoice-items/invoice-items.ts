import { Component, input, output, signal, computed, effect } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface InvoiceItem {
    description: string;
    legalBasis: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    total: number;
}

@Component({
    selector: 'app-invoice-items',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './invoice-items.html',
    styleUrl: './invoice-items.css'
})
export class InvoiceItems {
    items = input<InvoiceItem[]>([]);
    itemsChange = output<InvoiceItem[]>();

    itemsForm = new FormGroup({
        items: new FormArray<FormGroup>([])
    });

    constructor() {
        effect(() => {
            const inputItems = this.items();
            this.updateFormArray(inputItems);
        });

        this.itemsForm.valueChanges.subscribe(value => {
            if (value.items) {
                const items = value.items.map(item => ({
                    description: item.description || '',
                    legalBasis: item.legalBasis || '',
                    quantity: item.quantity || 0,
                    unit: item.unit || 'pcs',
                    unitPrice: item.unitPrice || 0,
                    total: item.total || 0
                }));
                this.itemsChange.emit(items);
            }
        });
    }

    get itemsArray() {
        return this.itemsForm.get('items') as FormArray;
    }

    get totalAmount() {
        return this.itemsArray.controls.reduce((sum, control) => {
            const total = control.get('total')?.value || 0;
            return sum + total;
        }, 0);
    }

    addItem(): void {
        const newItem = new FormGroup({
            description: new FormControl('', [Validators.required]),
            legalBasis: new FormControl(''),
            quantity: new FormControl(1, [Validators.required, Validators.min(0.01)]),
            unit: new FormControl('pcs', [Validators.required]),
            unitPrice: new FormControl(0, [Validators.required, Validators.min(0)]),
            total: new FormControl(0)
        });

        this.itemsArray.push(newItem);
        this.setupItemCalculations(newItem);
    }

    removeItem(index: number): void {
        this.itemsArray.removeAt(index);
    }

    private updateFormArray(items: InvoiceItem[]): void {
        this.itemsArray.clear();
        items.forEach(item => {
            const formGroup = new FormGroup({
                description: new FormControl(item.description, [Validators.required]),
                legalBasis: new FormControl(item.legalBasis),
                quantity: new FormControl(item.quantity, [Validators.required, Validators.min(0.01)]),
                unit: new FormControl(item.unit, [Validators.required]),
                unitPrice: new FormControl(item.unitPrice, [Validators.required, Validators.min(0)]),
                total: new FormControl(item.total)
            });
            this.itemsArray.push(formGroup);
            this.setupItemCalculations(formGroup);
        });
    }

    private setupItemCalculations(formGroup: FormGroup): void {
        const quantityControl = formGroup.get('quantity');
        const unitPriceControl = formGroup.get('unitPrice');
        const totalControl = formGroup.get('total');

        if (quantityControl && unitPriceControl && totalControl) {
            quantityControl.valueChanges.subscribe(() => this.calculateTotal(formGroup));
            unitPriceControl.valueChanges.subscribe(() => this.calculateTotal(formGroup));
        }
    }

    private calculateTotal(formGroup: FormGroup): void {
        const quantity = formGroup.get('quantity')?.value || 0;
        const unitPrice = formGroup.get('unitPrice')?.value || 0;
        const total = quantity * unitPrice;
        formGroup.get('total')?.setValue(total, { emitEvent: false });
    }

    getItemControl(index: number, field: string): FormControl {
        return this.itemsArray.at(index).get(field) as FormControl;
    }

    isItemValid(index: number): boolean {
        return this.itemsArray.at(index).valid;
    }
}
