import type { CounterSchema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './counter.slice';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state:CounterSchema = { value: 99 };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 100 });
    });
    test('decrement', () => {
        const state:CounterSchema = { value: 99 };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 98 });
    });
    test('With an empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
