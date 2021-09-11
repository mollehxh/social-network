import { createStore, createEvent, forward } from 'effector';
import { useStore, useStoreMap } from 'effector-react';
import firebase from 'firebase';

export const pageMounted = createEvent();
export const setDialogs = createEvent<firebase.firestore.DocumentData[]>();

const $dialogs = createStore<any>([]);

forward({
  from: setDialogs,
  to: $dialogs,
});

export const useDialogs = () => useStore($dialogs);
export const useDialog = (dialogId: string) =>
  useStoreMap({
    store: $dialogs,
    keys: [dialogId],
    fn: (dialogs, [dialogId]) =>
      dialogs.find(({ id }: { id: string }) => id === dialogId),
  });

$dialogs.watch(console.log);
