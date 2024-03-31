import { ToastTypes } from '@/@enums';

export interface ToastOptions {
    id?: string;
    text?: string;
    timeout?: number;
}

export interface Toast extends ToastOptions {
    id: string;
    type: ToastTypes;
}
