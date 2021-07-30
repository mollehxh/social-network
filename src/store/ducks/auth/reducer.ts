import produce, { Draft } from 'immer';
import { AuthAction, AuthActionTypes, IAuthState } from './types';

const initialState: IAuthState = {
  user: null,
  isLoading: false,
  error: '',
};

const authReducer = produce((draft: Draft<IAuthState>, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.SET_USER:
      draft.user = action.payload;
      break;
    case AuthActionTypes.SET_LOADING:
      draft.isLoading = action.payload;
      break;
    case AuthActionTypes.SET_ERROR:
      draft.error = action.payload;
      break;
  }
}, initialState);

export default authReducer;
