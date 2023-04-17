import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { Button, ButtonTheme } from './Button';

describe('button', () => {
    test('default', () => {
        const container = document.body.appendChild(document.createElement('div'));
        createRoot(container).render(<Button>Test</Button>);
        setTimeout(() => {
            expect(screen.getByText('Test')).toBeInTheDocument();
            screen.debug();
        });
    });

    test('clear', () => {
        const container = document.body.appendChild(document.createElement('div'));
        createRoot(container).render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        setTimeout(() => {
            expect(screen.getByText('Test')).toBeInTheDocument();
            screen.debug();
        });
    });
});
