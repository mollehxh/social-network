import { takeEvery } from 'redux-saga/effects';
import { authModel } from 'features/auth';

function* signInWorker() {}

function* signUpWorker() {}

export function* authWatcher() {
  yield takeEvery(authModel.actions.signIn.type, signInWorker);
  yield takeEvery(authModel.actions.signUp.type, signUpWorker);
}
