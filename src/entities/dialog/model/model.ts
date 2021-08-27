import { createEffect, createEvent, createStore, forward } from 'effector';
import { fetchMessages } from 'shared/api/api';

export const addMessage = createEvent();

export const $messages = createStore<any>([]).on(addMessage, (store, value) => [
  ...store,
  value,
]);

export const fxFetchMessages = createEffect(async () => {
  const messages = fetchMessages();
  return messages;
});

forward({
  from: fxFetchMessages.doneData,
  to: $messages,
});
