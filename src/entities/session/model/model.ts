import { createEvent, createStore, forward } from 'effector';
import { useStore } from 'effector-react';
import { User } from 'shared/types';

export const $session = createStore<User | null>(null);

export const setSession = createEvent<User | null>();

forward({
  from: setSession,
  to: $session,
});

export const useSession = () => {
  return useStore($session);
};
