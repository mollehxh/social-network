import { firestore } from 'shared/config/firebase-config';

export const fetchMessages = async () => {
  const collection = await firestore.collection('messages').get();
  const messages = collection.docs.map((item) => item.data());
  return messages;
};

export const sendMessage = async (data: any) => {
  firestore.collection('messages').add(data);
};
