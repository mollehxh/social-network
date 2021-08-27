import { store } from 'app/store';
import React from 'react';
import { Provider } from 'react-redux';

export const withStore = (Component: React.FC) => () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};
