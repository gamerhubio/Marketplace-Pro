import { createSlice } from '@reduxjs/toolkit';

export interface IReduxState {
  auth: any;
}

export interface IUser {
  id: string;
  email: string;
  username: string;
}

interface IState {
  token: string | null;
  user: IUser | null; 
  lastRewardTime: number | null
}

const initialState : IState = {
  token: null,
  user: null,
  lastRewardTime: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to add conversation
    setAuthToken: (state, action) => {
      state.token =  action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null
      state.user = null
      state.lastRewardTime = null
    },
  },
});

export const { setAuthToken, setUserData, logout } = authSlice.actions;

export const getAuthToken = (state: IReduxState) => state.auth.token;
export const getUserData = (state: IReduxState) => state.auth.user;

export default authSlice.reducer;