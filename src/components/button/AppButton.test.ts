import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import AppButton from './';

describe('AppButton', () => {
    const wrapper = mount(AppButton, {
        slots: {
            default: 'button',
        },
    });

    it('should render correctly', () => {
        expect(wrapper.html()).toContain('button');
    });
});
