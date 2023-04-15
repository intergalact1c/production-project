import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';
describe('Sidebar', function () {
    test('default', function () {
        componentRender(_jsx(Sidebar, {}, void 0));
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', function () {
        componentRender(_jsx(Sidebar, {}, void 0));
        var toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
