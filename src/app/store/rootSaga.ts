import { authWatcher } from 'features/auth';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([authWatcher()]);
}
