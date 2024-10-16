import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByEmail';
import { userReducer } from 'entity/User';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?:StateSchema) => {
    const rootReducer:ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
