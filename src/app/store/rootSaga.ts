import { all } from 'redux-saga/effects';
import { authWatcher } from 'features/auth';

export function* rootSaga() {
  yield all([authWatcher()]);
}
