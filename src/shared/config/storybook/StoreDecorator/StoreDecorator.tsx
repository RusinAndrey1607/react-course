import { DeepPartial } from '@reduxjs/toolkit';
import { DecoratorFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state:DeepPartial<StateSchema>):DecoratorFn => (Story) => (
    <StoreProvider initialState={state as StateSchema}>
        <Story />
    </StoreProvider>
);
