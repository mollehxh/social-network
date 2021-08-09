import firebase from 'firebase/app';

export interface AuthData {
  email: string;
  password: string;
}

export interface AuthState {
  user: firebase.User | null;
  pending: boolean;
  isAuth: boolean;
}
