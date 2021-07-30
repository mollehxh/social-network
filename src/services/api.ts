import { auth } from 'firebaseConfig';

export const signIn = async (email: string, password: string) => {
  const { user } = await auth.signInWithEmailAndPassword(email, password);
  return user;
};

export const signUp = async (email: string, password: string) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  return user;
};
