import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface ThemeSwitcherProps {
    classname?: string;
    isInverted?: boolean;
}

export const ThemeSwitcher = ({ classname, isInverted = true }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const normal = theme === Theme.DARK ? <DarkIcon /> : <LightIcon />;
    const storybook = theme === Theme.DARK ? <LightIcon /> : <DarkIcon />;

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [classname])}
            onClick={toggleTheme}
        >
            {isInverted ? normal : storybook}
        </Button>
    );
};
