// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAru8A2bDeJHovR2IoSKnrnEIr_HymBQNw",
  authDomain: "linkedin-clone-7de56.firebaseapp.com",
  projectId: "linkedin-clone-7de56",
  storageBucket: "linkedin-clone-7de56.appspot.com",
  messagingSenderId: "844166256344",
  appId: "1:844166256344:web:58b73a807870cdc89ee9ad",
  measurementId: "G-R21HCHYLNT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
// export { auth };
// export default db;
