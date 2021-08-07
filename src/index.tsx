import React from 'react';
import { render } from 'react-dom';
import App from 'app';
import { auth } from 'shared/config/firebaseConfig';
import { store } from 'app/store';
import { setLoading, setUser } from 'features/auth/model';

auth.onAuthStateChanged(user => {
  store.dispatch(setLoading(true));
  store.dispatch(setUser(user));
  store.dispatch(setLoading(false));
  render(<App />, document.getElementById('root'));
});
