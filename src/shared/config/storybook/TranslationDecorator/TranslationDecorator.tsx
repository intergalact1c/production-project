import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18nStorybook from '../../i18n/i18nStorybook';

export const TranslationDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18nStorybook}>
        <StoryComponent />
    </I18nextProvider>
);
