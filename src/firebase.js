// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDiUrV-a1CJHAUR3J1wEApEITBaeaO_p4I",
  authDomain: "discord-clone-4300c.firebaseapp.com",
  databaseURL: "https://discord-clone-4300c.firebaseio.com",
  projectId: "discord-clone-4300c",
  storageBucket: "discord-clone-4300c.appspot.com",
  messagingSenderId: "820703076112",
  appId: "1:820703076112:web:13c804f55374e8dc770f95",
  measurementId: "G-JQZYZS0W5G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;