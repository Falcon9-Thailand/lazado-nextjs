import firebaseConfigure from "src/Firebase/firebaseConfigure";
import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfigure);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
