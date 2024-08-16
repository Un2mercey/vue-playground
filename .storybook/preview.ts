import type { Preview } from '@storybook/vue3';
import '../src/styles/index.scss';
import { appBackgroundColor } from '../src/styles/exported';

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: appBackgroundColor,
                }
            ]
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
