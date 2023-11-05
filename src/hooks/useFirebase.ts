import { useContext } from 'react';
import FirebaseContext from '../firebase/context';
import { Firebase } from '../firebase/firebase';

interface FirebaseContextProps {
  firebase: Firebase
}

function useFirebase() {
  return useContext(FirebaseContext) as FirebaseContextProps;
}


export default useFirebase;
