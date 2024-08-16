import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import AppButton from './index';
import { ButtonShapes, ButtonTypes, isButtonSize, Sizes } from '@/@enums';
import SVGIcon from '@/components/icons';

const icons: Readonly<string[]> = [
    'button',
    'chevron-left',
    'chevron-right',
    'close',
    'error',
    'home',
    'info',
    'refresh',
    'success',
    'warning'
];

const meta: Meta<typeof AppButton> = {
    title: 'Components/Button',
    component: AppButton,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: Object.values(ButtonTypes),
            control: {
                type: 'select',
                labels: {
                    [ButtonTypes.PRIMARY]: 'Primary',
                    [ButtonTypes.SECONDARY]: 'Secondary',
                    [ButtonTypes.ACCENT]: 'Accent',
                    [ButtonTypes.GHOST]: 'Ghost',
                    [ButtonTypes.CLEAR]: 'Clear',
                }
            },
            table: {
                defaultValue: {
                    summary: 'ButtonTypes.PRIMARY',
                    detail: ButtonTypes.PRIMARY,
                },
            }
        },
        shape: {
            options: Object.values(ButtonShapes),
            control: {
                type: 'select',
                labels: {
                    [ButtonShapes.DEFAULT]: 'Default',
                    [ButtonShapes.BRICK]: 'Brick',
                    [ButtonShapes.ROUND]: 'Round',
                }
            },
            table: {
                defaultValue: {
                    summary: 'ButtonShapes.DEFAULT',
                    detail: ButtonShapes.DEFAULT,
                },
            }
        },
        size: {
            description: '`Sizes.XXL`, `Sizes.XL` is not supported',
            options: Object.values(Sizes).filter(isButtonSize),
            control: {
                type: 'select',
                labels: {
                    [Sizes.XS]: 'Extra Small',
                    [Sizes.SM]: 'Small',
                    [Sizes.MD]: 'Medium',
                    [Sizes.LG]: 'Large',
                }
            },
            table: {
                defaultValue: {
                    summary: 'Sizes.MD',
                    detail: Sizes.MD,
                },
            }
        },
        disabled: {
            control: { type: 'boolean' },
            table: {
                defaultValue: {
                    summary: 'false',
                }
            }
        },
        default: {
            description: 'If this slot is `empty` but one of `#prepend` or `#append` slots added would be added the `--icon` class',
            control: { type: 'text', },
        },
        prepend: {
            options: [...icons],
            control: { type: 'select'},
        }
    },
};

export default meta;

type Story = StoryObj<typeof AppButton>;

const Template: StoryFn = (args) => ({
    components: { AppButton, SVGIcon },
    setup() { return { args }; },
    template: '' +
        '<AppButton v-bind="args">' +
            '<template #prepend><SVGIcon :name="args.prepend" /></template>' +
            '<template #default><span>{{ args.defautt }}</span>></template>' +
            '<template #append><SVGIcon :name="args.append" /></template>' +
        '</AppButton>',
});

export const Example: Story = Template.bind({});
Example.args = {
    type: ButtonTypes.PRIMARY,
    shape: ButtonShapes.DEFAULT,
    size: Sizes.MD,
    disabled: false,
    default: 'Button',
}
