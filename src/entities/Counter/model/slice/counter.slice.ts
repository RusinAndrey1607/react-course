import { createSlice } from '@reduxjs/toolkit';
import type { CounterSchema } from 'entities/Counter/model/types/CounterSchema';

const initialState:CounterSchema = {
    value: 0,
};
const counterSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { reducer: counterReducer } = counterSlice;
export const { actions: counterActions } = counterSlice;
