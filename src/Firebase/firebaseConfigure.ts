import firebase from "firebase/app";
import firebaseKeys from "src/Firebase/firebaseKeys";
import "firebase/auth";
import "firebase/analytics";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseKeys);
}

const app = firebase.app();
const auth = firebase.auth();

export { app, auth };
