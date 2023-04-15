import { classNames } from '../classNames/classNames';
describe('classNames', function () {
    test('with only first param', function () {
        expect(classNames('className')).toBe('className');
    });
    test('with additional class', function () {
        var expected = 'className className1 className2';
        expect(classNames('className', {}, ['className1', 'className2'])).toBe(expected);
    });
    test('with mods', function () {
        var expected = 'className className1 className2 hovered scrollable';
        expect(classNames('className', { hovered: true, scrollable: true }, ['className1', 'className2'])).toBe(expected);
    });
    test('with mods false', function () {
        var expected = 'className className1 className2 hovered';
        expect(classNames('className', { hovered: true, scrollable: false }, ['className1', 'className2'])).toBe(expected);
    });
    test('with mods undefined', function () {
        var expected = 'className className1 className2 hovered';
        expect(classNames('className', { hovered: true, scrollable: undefined }, ['className1', 'className2'])).toBe(expected);
    });
});
