import { Action } from 'redux';

export enum AuthActionTypes {
  SET_USER = 'SET_USER',
  SIGN_OUT = 'SIGN_OUT',
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface IUser {
  firstName: string;
  email: string;
  id: string;
  createdAt: any;
}

export interface IAuthState {
  user: IUser | null;
  isLoading: boolean;
  error: string;
}

interface ISetUserAction extends Action {
  type: string;
  payload: IUser | any;
}

interface ISetLoadingAction extends Action {
  type: string;
  payload: boolean;
}

interface ISetError extends Action {
  type: string;
  payload: string;
}

export type AuthAction = ISetUserAction | ISetLoadingAction | ISetError;
