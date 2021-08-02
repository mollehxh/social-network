import { Action } from 'redux';

export enum AuthActionTypes {
  SET_USER = 'SET_USER',
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  SET_LOADING = 'SET_LOADING',
}

export interface signInData {
  email: string;
  password: string;
}

export interface User {
  email: string;
  uid: string;
  createdAt: string;
  emailVerified: boolean;
  lastLoginAt: string;
  lastRefreshAt: string;
  localId: string;
  passwordHash: string;
  passwordUpdatedAt: number;
  providerUserInfo: string;
  validSince: string;
}

export interface IAuthState {
  user: User | null;
  isLoading: boolean;
  error: string;
}

export interface ISetUserAction extends Action {
  type: AuthActionTypes.SET_USER;
  payload: User;
}

export interface ISetLoadingAction extends Action {
  type: AuthActionTypes.SET_LOADING;
  payload: boolean;
}

export type AuthAction = ISetUserAction | ISetLoadingAction;
