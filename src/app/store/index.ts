import { configureStore } from '@reduxjs/toolkit';
import { authModel } from 'features/auth';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './rootSaga';

const sagaMiddlewate = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authModel.reducer,
  },
  middleware: [sagaMiddlewate],
  devTools: true,
});

sagaMiddlewate.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
