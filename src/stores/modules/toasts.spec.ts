import { addMilliseconds, getTime } from 'date-fns';
import { storeToRefs } from 'pinia';
import { describe, expect, it } from 'vitest';
import { StoreIds, ToastTypes } from '@/@enums';
import { store, useToastsStore } from '@/stores';
import { typeSafeValues } from '@/utils';

describe(`${StoreIds.TOASTS} Store`, () => {
    const toastStore = useToastsStore(store);
    const { showErrorToast, showSuccessToast, showWarningToast, showInfoToast, hideToast } = toastStore;
    const { toasts } = storeToRefs(toastStore);

    const idMap: Map<ToastTypes, string> = new Map(
        typeSafeValues(ToastTypes).map((type, index) => [type, String(getTime(addMilliseconds(new Date(), index)))]),
    );

    it('should show error toast', () => {
        const id = idMap.get(ToastTypes.ERROR)!;
        const text = 'Error';

        showErrorToast({ id, text });

        expect(toasts.value.length).toBe(1);
        expect(toasts.value[0]).contain({
            id,
            text,
            type: ToastTypes.ERROR,
        });
    });

    it('should hide toast', () => {
        const id = idMap.get(ToastTypes.ERROR)!;
        hideToast(id);
        expect(toasts.value.length).toBe(0);
    });

    it('should show success toast', () => {
        const id = idMap.get(ToastTypes.SUCCESS)!;
        const text = 'Success';

        showSuccessToast({ id, text });

        expect(toasts.value.length).toBe(1);
        expect(toasts.value[0]).contain({
            id,
            text,
            type: ToastTypes.SUCCESS,
        });
    });

    it('should show warning toast', () => {
        const id = idMap.get(ToastTypes.WARNING)!;
        const text = 'Warning';

        showWarningToast({ id, text });

        expect(toasts.value.length).toBe(2);
        expect(toasts.value[1]).contain({
            id,
            text,
            type: ToastTypes.WARNING,
        });
    });

    it('should show info toast', () => {
        const id = idMap.get(ToastTypes.INFO)!;
        const text = 'Info';

        showInfoToast({ id, text });

        expect(toasts.value.length).toBe(3);
        expect(toasts.value[2]).contain({
            id,
            text,
            type: ToastTypes.INFO,
        });
    });
});
