import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const config = {
    apiKey: "AIzaSyD1mZB-uctTs3dRtsDdANRVnVN2PPLhWWs",
    authDomain: "chitly-9711f.firebaseapp.com",
    databaseURL: "https://chitly-9711f-default-rtdb.firebaseio.com",
    projectId: "chitly-9711f",
    storageBucket: "chitly-9711f.appspot.com",
    messagingSenderId: "11200431287",
    appId: "1:11200431287:web:7a4135d88267f6f21e3932",
    measurementId: "G-WH0N3HZ4TT"
  }
  
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }else {
    firebase.app();
  }
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  
export default auth