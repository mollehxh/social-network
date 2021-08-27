import { auth } from 'shared/config/firebase-config';

export const signIn = async (email: string, password: string) => {
  const user = await auth.signInWithEmailAndPassword(email, password);
  return user;
};

export const signUp = async (email: string, password: string) => {
  const user = await auth.createUserWithEmailAndPassword(email, password);
  return user;
};

export const signOut = () => auth.signOut();
