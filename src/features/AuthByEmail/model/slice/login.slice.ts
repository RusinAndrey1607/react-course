import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LoginSchema } from '../types/LoginSchema';
import { loginByEmail } from '../services/loginByEmail/loginByEmail';
import { registrationByEmail } from '../services/registrationByEmail/registrationByEmail';

const initialState: LoginSchema = {
    isLoading: false,
    password: '',
    email: '',
    username: '',
    error: null,
};

const LoginSlice = createSlice({
    initialState,
    name: 'loginForm',
    reducers: {
        setUsername: (state, action:PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },
        setEmail: (state, action:PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
    extraReducers(builder) {
        // Login
        builder.addCase(loginByEmail.pending, (state, action) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(loginByEmail.fulfilled, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(loginByEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        // Registration
        builder.addCase(registrationByEmail.pending, (state, action) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(registrationByEmail.fulfilled, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(registrationByEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export const { reducer: loginReducer, actions: loginActions } = LoginSlice;
