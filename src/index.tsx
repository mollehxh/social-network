import React from 'react';
import firebase from 'firebase';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { App } from './components/App';
import { auth } from 'firebaseConfig';
import { setLoadingAction } from 'features/auth/model/actions';
import { setUserAction } from 'features/auth/model/actions';
import { User } from 'features/auth/model/types';

auth.onAuthStateChanged(user => {
  const parsedUser = parseUser(user);
  store.dispatch(setLoadingAction(true));
  store.dispatch(setUserAction(parsedUser));
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

const parseUser = (user: firebase.User | null) => user as User | null;
