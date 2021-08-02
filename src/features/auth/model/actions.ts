import {
  AuthActionTypes,
  ISetLoadingAction,
  ISetUserAction,
  signInData,
  User,
} from './types';

export const setUserAction = (payload: User | null) =>
  ({
    type: AuthActionTypes.SET_USER,
    payload,
  } as ISetUserAction);

export const signInAction = (payload: signInData) => ({
  type: AuthActionTypes.SIGN_IN,
  payload,
});

export const setLoadingAction = (payload: boolean) =>
  ({
    type: AuthActionTypes.SET_LOADING,
    payload,
  } as ISetLoadingAction);
