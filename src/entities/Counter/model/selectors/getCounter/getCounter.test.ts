import type { DeepPartial } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter.test', () => {
    test('Should return counter value', () => {
        const state:DeepPartial<StateSchema> = {
            counter: {
                value: 99,
            },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 99 });
    });
});
