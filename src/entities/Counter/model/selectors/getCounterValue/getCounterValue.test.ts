import type { DeepPartial } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('Should return counter value', () => {
        const state:DeepPartial<StateSchema> = {
            counter: {
                value: 99,
            },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(99);
    });
});
