import firebase from 'firebase';
import { firestore } from 'shared/config/firebase-config';

export const onDialogMessagesChanged = (
  uid: string,
  callback: (snapshot: firebase.firestore.DocumentData[]) => void
) => {
  firestore
    .collection('users')
    .doc(uid)
    .collection('dialogs')
    .onSnapshot((snapshot) => callback(snapshot.docs.map((doc) => doc.data())));
};
