import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAcCLzrxE97aP2PaqSiOeY89G-wTW8Pxo",
  authDomain: "cv-constructor-de3f2.firebaseapp.com",
  projectId: "cv-constructor-de3f2",
  storageBucket: "cv-constructor-de3f2.appspot.com",
  messagingSenderId: "300982059105",
  appId: "1:300982059105:web:c743bed219db6b1d91ea20"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
