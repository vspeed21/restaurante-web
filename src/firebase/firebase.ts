/* eslint-disable @typescript-eslint/no-explicit-any */
import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import firebaseConfig from './config';

export class Firebase {
  db: any
  storage: any

  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
    this.storage = app.storage();
  }
}

const firebase = new Firebase();

export default firebase;
