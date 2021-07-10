import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function Information(){
   const auth = firebase.auth()

   return (
       <div>
           {auth.currentUser && auth.currentUser.displayName}
       </div>
   )
}

export default Information;