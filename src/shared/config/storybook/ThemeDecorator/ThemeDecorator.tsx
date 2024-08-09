import type { DecoratorFn } from '@storybook/react';
import type { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme:Theme):DecoratorFn => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
