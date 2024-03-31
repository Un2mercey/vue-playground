import { getTime } from 'date-fns';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { StoreIds, ToastTypes } from '@/@enums';
import { Toast, ToastOptions } from '@/@interfaces';

export const useToastsStore = defineStore(StoreIds.TOASTS, () => {
    const toasts = ref<Toast[]>([]);

    function getToastOptions(toastOptions: ToastOptions): Omit<Toast, 'type'> {
        const id = String(toastOptions.id || getTime(new Date()));
        return { ...toastOptions, id };
    }

    function showErrorToast(toastOptions: ToastOptions): void {
        toasts.value.push({ ...getToastOptions(toastOptions), type: ToastTypes.ERROR });
    }

    function showSuccessToast(toastOptions: ToastOptions): void {
        toasts.value.push({ ...getToastOptions(toastOptions), type: ToastTypes.SUCCESS });
    }

    function showWarningToast(toastOptions: ToastOptions): void {
        toasts.value.push({ ...getToastOptions(toastOptions), type: ToastTypes.WARNING });
    }

    function showInfoToast(toastOptions: ToastOptions): void {
        toasts.value.push({ ...getToastOptions(toastOptions), type: ToastTypes.INFO });
    }

    function hideToast(id: string): void {
        toasts.value = toasts.value.filter((toast: Toast) => toast.id !== id);
    }

    return {
        toasts,
        showErrorToast,
        showSuccessToast,
        showWarningToast,
        showInfoToast,
        hideToast,
    };
});
