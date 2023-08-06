import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp2aH_QFyqX7iB1TYd-PAybIjSC-0YddI",
  authDomain: "miniblog-c75c2.firebaseapp.com",
  projectId: "miniblog-c75c2",
  storageBucket: "miniblog-c75c2.appspot.com",
  messagingSenderId: "1013083393460",
  appId: "1:1013083393460:web:1a584d21ec2f2a8e5c76e1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };