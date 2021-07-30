import { all } from '@redux-saga/core/effects';
import authWatcher from './ducks/auth/sagas';

export function* rootSaga() {
  yield all([authWatcher()]);
}
