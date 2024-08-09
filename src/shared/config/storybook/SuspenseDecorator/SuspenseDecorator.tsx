import type { DecoratorFn } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator:DecoratorFn = (Story) => (
    <Suspense fallback="...">
        <Story />
    </Suspense>
);
