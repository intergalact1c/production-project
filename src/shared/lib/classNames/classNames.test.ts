import { classNames } from '../classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('className')).toBe('className');
    });

    test('with additional class', () => {
        const expected = 'className className1 className2';
        expect(classNames('className', {}, ['className1', 'className2'])).toBe(
            expected,
        );
    });

    test('with mods', () => {
        const expected = 'className className1 className2 hovered scrollable';
        expect(
            classNames('className', { hovered: true, scrollable: true }, [
                'className1',
                'className2',
            ]),
        ).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'className className1 className2 hovered';
        expect(
            classNames('className', { hovered: true, scrollable: false }, [
                'className1',
                'className2',
            ]),
        ).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'className className1 className2 hovered';
        expect(
            classNames('className', { hovered: true, scrollable: undefined }, [
                'className1',
                'className2',
            ]),
        ).toBe(expected);
    });
});
