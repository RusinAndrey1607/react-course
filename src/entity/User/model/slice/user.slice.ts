import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { USER_LS_KEY } from 'shared/const/localstorage';
import type { User, UserSchema } from '../types/UserSchema';

const initialState:UserSchema = {
    authData: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, acton:PayloadAction<User>) => {
            state.authData = acton.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LS_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = null;
            localStorage.removeItem(USER_LS_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
