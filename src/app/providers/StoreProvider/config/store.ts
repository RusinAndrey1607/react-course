import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?:StateSchema) => configureStore<StateSchema>({
    reducer: {
        counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
