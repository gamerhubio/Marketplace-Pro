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
  new: boolean
}

const initialState : IState = {
  token: null,
  user: null,
  lastRewardTime: 0,
  new: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to add conversation
    setAuthToken: (state, action) => {
      state.user = null
      state.lastRewardTime = 0
      state.token =  action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setLastRewardTime: (state) => {
      state.lastRewardTime = Date.now()
    },
    setNewAcct: (state, action) => {
      state.new = action.payload
    },
    logout: (state) => {
      state.token = null
      state.user = null
      state.lastRewardTime = 0
    },
  },
});

export const { setAuthToken, setUserData, setLastRewardTime, setNewAcct, logout } = authSlice.actions;

export const getAuthToken = (state: IReduxState) => state.auth.token;
export const getUserData = (state: IReduxState) => state.auth.user;
export const getLastRewardTime = (state: IReduxState) => state.auth.lastRewardTime;
export const getNewAcct = (state: IReduxState) => state.auth.new;

export default authSlice.reducer;