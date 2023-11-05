import app from 'firebase/compat/app';
import 'firebase/compat/firestore';

import firebaseConfig from './config';

export class Firebase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any

  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }
}

const firebase = new Firebase();

export default firebase;
