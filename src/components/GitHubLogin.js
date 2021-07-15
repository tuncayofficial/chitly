import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useState, useEffect, useRef } from "react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FcGoogle } from "react-icons/fc"

function GitHubLogin(props){

      const auth = firebase.auth()
      const firestore = firebase.firestore()
      
      var provider = new firebase.auth.GithubAuthProvider();
      provider.addScope("repo","user")
      provider.setCustomParameters({
        'allow_signup': 'false'
      });

    function signInWithGitHub(){
        firebase.auth().signInWithPopup(provider).then((result) => {
    var credential = result.credential;

    var token = credential.accessToken;

    var user = result.user;
    
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
}
 
      return (
        <div>
          <FcGoogle size = {35} style = {{ cursor : "pointer" }} onClick={signInWithGitHub} />
        </div>
      )
}

export default GitHubLogin