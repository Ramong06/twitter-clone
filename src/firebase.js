import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDt_q2w-cKRpheEzah6OkSAyS3CkFHdZMA",
  authDomain: "twitter-clone-c4d22.firebaseapp.com",
  projectId: "twitter-clone-c4d22",
  storageBucket: "twitter-clone-c4d22.appspot.com",
  messagingSenderId: "756050364529",
  appId: "1:756050364529:web:ce64bf26c530bd92d0f3d0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;