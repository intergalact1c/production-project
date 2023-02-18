import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeProviderDecorator = (story: () => Story) => (
    <ThemeProvider>
        {story()}
    </ThemeProvider>
);
