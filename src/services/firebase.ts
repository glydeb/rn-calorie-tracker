import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword as firebaseCreateUser, signInWithEmailAndPassword as firebaseSignIn, signOut as firebaseSignOut, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

let firebaseApp: any;

const firebaseConfig = Constants.manifest?.extra?.firebase;

if (firebaseConfig) {
  firebaseApp = initializeApp(firebaseConfig);
}

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export const initializeFirebase = () => {
  if (!firebaseApp && firebaseConfig) {
    initializeApp(firebaseConfig);
  }
};

export const createUserWithEmailAndPassword = (email: string, password: string): Promise<any> => {
  return firebaseCreateUser(auth, email, password);
};

export const signInWithEmailAndPassword = (email: string, password: string): Promise<any> => {
  return firebaseSignIn(auth, email, password);
};

export const signOut = (): Promise<void> => {
  return firebaseSignOut(auth);
};

// You can add more Firebase utility functions here for database interactions