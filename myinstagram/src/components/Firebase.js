import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";


const firebaseConfig={
  apiKey: "AIzaSyBt9Cu5nwXw0Rlhs5M0O72oNy3JsfZh7zA",
  authDomain: "insta-58aae.firebaseapp.com",
  projectId: "insta-58aae",
  storageBucket: "insta-58aae.appspot.com",
  messagingSenderId: "509173735153",
  appId: "1:509173735153:web:d857221a256732de295350",
  measurementId: "G-LGWM6Z9V4X"
};

export const app=initializeApp(firebaseConfig)
export const storage=getStorage()
  