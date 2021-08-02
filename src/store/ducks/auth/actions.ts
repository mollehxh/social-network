import { AuthActionTypes } from './types';

export const signInAction = (payload: any) => ({
  type: AuthActionTypes.SIGN_IN,
  payload,
});

export const signUpAction = (payload: any) => ({
  type: AuthActionTypes.SIGN_UP,
  payload,
});

export const setUserAction = (payload: any) => ({
  type: AuthActionTypes.SET_USER,
  payload,
});

export const setLoadingAction = (payload: boolean) => ({
  type: AuthActionTypes.SET_LOADING,
  payload,
});
