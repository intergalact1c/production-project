import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from './Button';

describe('button', () => {
    test('default', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
        screen.debug();
    });

    test('clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
        screen.debug();
    });
});
