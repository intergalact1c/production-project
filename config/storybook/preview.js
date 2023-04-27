import { addDecorator } from '@storybook/react';
import i18n from 'i18next';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#e8e8ea' },
            { name: 'dark', class: Theme.DARK, color: '#090949' },
            { name: 'orange', class: Theme.ORANGE, color: '#faf4fb' },
        ],
    },
    i18n,
    locale: 'ru',
    locales: {
        ru: 'Russian',
        en: 'English',
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(TranslationDecorator);
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
