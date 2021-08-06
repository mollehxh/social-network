import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { setLoading, setUser, signIn, signUp } from './authSlice';
// import { setLoadingAction, setUserAction } from './actions';
import * as API from 'shared/api/auth';
// import { firestore } from 'firebaseConfig';

function* signInWorker(action: any): Generator {
  console.log('saga work!');

  try {
    yield put(setLoading(true));
    const user = yield call(
      API.signIn,
      action.payload.email,
      action.payload.password
    );
    yield put(setUser(user));
    yield put(setLoading(false));
  } catch (err) {
    yield put(setLoading(false));
    toast.error(err.message);
  }
}

function* signUpWorker(): Generator {
  // try {
  // yield put(setLoadingAction(true));
  // const user: any = yield call(
  // API.signUp,
  // action.payload.email,
  // action.payload.password
  // );
  // firestore.collection('users').doc(user.uid).set({
  // firstName: action.payload.firstName,
  // secondName: action.payload.secondName,
  // });
  // yield put(setUserAction(user));
  // yield put(setLoadingAction(false));
  // } catch (err) {
  // yield put(setLoadingAction(false));
  // toast.error(err.message);
  // }
}

export function* authWatcher(): Generator {
  yield takeLatest(signIn.type, signInWorker);
  yield takeLatest(signUp.type, signUpWorker);
}
