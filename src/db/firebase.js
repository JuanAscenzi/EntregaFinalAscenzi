import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5uIHhWOmmkXxQsq_Wz2NVqh8ntSdh3Ms",
  authDomain: "mi-app-react-d79ad.firebaseapp.com",
  projectId: "mi-app-react-d79ad",
  storageBucket: "mi-app-react-d79ad.appspot.com",
  messagingSenderId: "892655421295",
  appId: "1:892655421295:web:f57799b641d0938eadca9a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);