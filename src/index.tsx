import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { App } from './components/App';
import { auth } from 'firebaseConfig';
import { setLoadingAction, setUserAction } from 'store/ducks/auth/actions';

auth.onAuthStateChanged((user) => {
  store.dispatch(setLoadingAction(true));
  store.dispatch(setUserAction(user));
  store.dispatch(setLoadingAction(false));
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById('root')
  );
});
