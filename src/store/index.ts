import { createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createMiddleware();

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
