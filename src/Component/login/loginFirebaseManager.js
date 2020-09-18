
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config'

firebase.initializeApp(firebaseConfig);


export const google = () => {
   const provider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(provider)
       .then(res => {
      return res
  })
  .catch(function (error) {
   return error
  });

}
