import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18nStorybook from 'shared/config/i18n/i18nStorybook';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <I18nextProvider i18n={i18nStorybook}>
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    </I18nextProvider>
);
