import { Routes } from '@angular/router';
import { Dashboard } from './feature/dashboard/dashboard';
import { InvoiceForm } from './feature/invoice/invoice-form/invoice-form';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard,
    },
    {
        path: 'invoice/create',
        component: InvoiceForm,
    }
];
