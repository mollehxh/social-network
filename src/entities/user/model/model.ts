import { createEvent, createStore, forward } from 'effector';
import { useStore } from 'effector-react';
import firebase from 'firebase';

export const $user = createStore<firebase.User | null>(null);
export const $isAuthenticated = $user.map((user) => user !== null);

export const setUser = createEvent<firebase.User | null>();

forward({
  from: setUser,
  to: $user,
});
