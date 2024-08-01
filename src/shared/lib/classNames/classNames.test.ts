import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class param', () => {
        expect(classNames('someClass', {}, ['cls1'])).toBe('someClass cls1');
    });
    test('with additional mods', () => {
        expect(classNames('someClass', { hovered: true, hidden: false }, ['cls1'])).toBe('someClass cls1 hovered');
    });
    test('with mods undefined', () => {
        expect(classNames('someClass', { hovered: true, hidden: undefined }, ['cls1'])).toBe('someClass cls1 hovered');
    });
});
