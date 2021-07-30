import { call, put, takeLatest } from 'redux-saga/effects';
import { setErrorAction, setLoadingAction, setUserAction } from './actions';
import { AuthActionTypes } from './types';
import * as API from 'services/api';
import { firestore } from 'firebaseConfig';
import { toast } from 'react-toastify';

function* signInWorker(action: any): Generator {
  try {
    yield put(setLoadingAction(true));
    const user = yield call(
      API.signIn,
      action.payload.email,
      action.payload.password
    );
    yield put(setUserAction(user));
    yield put(setLoadingAction(false));
  } catch (err) {
    yield put(setLoadingAction(false));
    toast.error(err.message);
  }
}

function* signUpWorker(action: any): Generator {
  try {
    yield put(setLoadingAction(true));
    const user: any = yield call(
      API.signUp,
      action.payload.email,
      action.payload.password
    );
    firestore.collection('users').doc(user.uid).set({
      firstName: action.payload.firstName,
      secondName: action.payload.secondName,
    });
    yield put(setUserAction(user));
    yield put(setLoadingAction(false));
  } catch (err) {
    yield put(setLoadingAction(false));
    toast.error(err.message);
  }
}

export default function* authWatcher(): Generator {
  yield takeLatest(AuthActionTypes.SIGN_IN, signInWorker);
  yield takeLatest(AuthActionTypes.SIGN_UP, signUpWorker);
}
