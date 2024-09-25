import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions, type User } from 'entity/User';
import { USER_LS_KEY } from 'shared/const/localstorage';

interface registrationByEmailByEmailProps {
    email:string,
    password:string,
    username:string,
}
export const registrationByEmail = createAsyncThunk<User, registrationByEmailByEmailProps, {rejectValue:string}>(
    'login/registrationByEmail',
    async (authData, thunkApi) => {
        try {
            // const response = await axios.post(`${process.env.BACKEND_URL}auth/registration`, authData);
            const response = await axios.post('http://localhost:8000/auth/registration', authData);
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
