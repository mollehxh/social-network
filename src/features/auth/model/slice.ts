import firebase from 'firebase/app';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthData, AuthState } from './types';

const initialState: AuthState = {
  user: null,
  pending: false,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<firebase.User | null>) {
      state.user = action.payload;
    },
    setPending(state, action: PayloadAction<boolean>) {
      state.pending = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    signIn(state, action: PayloadAction<AuthData>) {},
    signUp(state, action: PayloadAction<AuthData>) {},
  },
});

export const reducer = authSlice.reducer;
export const actions = authSlice.actions;
