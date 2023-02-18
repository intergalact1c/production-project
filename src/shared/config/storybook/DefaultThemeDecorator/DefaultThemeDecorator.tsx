import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useMemo, useState } from 'react';

export const DefaultThemeDecorator = (defaultTheme: Theme) => (StoryComponent: Story) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            <StoryComponent />
        </ThemeContext.Provider>
    );
};
