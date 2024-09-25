import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions, User } from 'entity/User';
import { USER_LS_KEY } from 'shared/const/localstorage';

interface LoginByEmailProps {
    email:string,
    password:string,
}
export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, {rejectValue:string}>(
    'login/loginByEmail',
    async (authData, thunkApi) => {
        try {
            // const response = await axios.post(`${process.env.BACKEND_URL}/auth/login`, authData);
            const response = await axios.post('http://localhost:8000/auth/login', authData);
            if (!response.data) {
                throw new Error();
            }
            thunkApi.dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue('Incorrect email or password');
        }
    },
);
