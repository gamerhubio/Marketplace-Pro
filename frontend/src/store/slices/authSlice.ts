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
  credit: number;
  lastLogin: number;
}

const initialState : IState = {
  token: null,
  user: null,
  lastRewardTime: 0,
  new: false,
  credit: 0,
  lastLogin: 0
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to add conversation
    setAuthToken: (state, action) => {
      state.user = null
      state.lastRewardTime = 0
      state.token =  action.payload
      state.new = false
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setLastRewardTime: (state) => {
      state.lastRewardTime = Date.now()
    },
    setLastLogin: (state) => {
      state.lastLogin = Date.now()
    },
    setNewAcct: (state, action) => {
      state.new = action.payload
    },
    setCredit: (state, action) => {
      state.credit = action.payload
    },
    logout: (state) => {
      state.token = null
      state.user = null
      state.new = false
      state.lastRewardTime = 0
      state.lastLogin = 0
    },
  },
});

export const { setAuthToken, setUserData, setLastRewardTime, setNewAcct, setCredit, setLastLogin, logout } = authSlice.actions;

export const getAuthToken = (state: IReduxState) => state.auth.token;
export const getUserData = (state: IReduxState) => state.auth.user;
export const getLastRewardTime = (state: IReduxState) => state.auth.lastRewardTime;
export const getNewAcct = (state: IReduxState) => state.auth.new;
export const getCredit = (state: IReduxState) => state.auth.credit
export const getLastLogin = (state: IReduxState) => state.auth.lastLogin

export default authSlice.reducer;