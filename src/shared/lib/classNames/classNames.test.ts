import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class param', () => {
        const expected = 'someClass cls1';
        expect(classNames('someClass', {}, ['cls1'])).toBe(expected);
    });
    test('with additional mods', () => {
        const expected = 'someClass cls1 hovered';
        expect(classNames('someClass', { hovered: true, hidden: false }, ['cls1'])).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass cls1';

        expect(classNames('someClass', { hidden: undefined }, ['cls1'])).toBe(expected);
    });
});
