import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import firebaseKeys from "src/Firebase/firebaseKeys";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseKeys);
}

const app = firebase.app();
const auth = firebase.auth();

console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working");
export { app, auth };
