import { RootState } from 'app/store';

export const user = (state: RootState) => state.auth.user;
export const pending = (state: RootState) => state.auth.pending;
export const isAuth = (state: RootState) => state.auth.isAuth;
