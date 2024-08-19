import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCccmZdg4FB7sa_2QLol0wP0EUFgFqQHAE",
    authDomain: "proyectoreactmanuleguizamon.firebaseapp.com",
    projectId: "proyectoreactmanuleguizamon",
    storageBucket: "proyectoreactmanuleguizamon.appspot.com",
    messagingSenderId: "190503018977",
    appId: "1:190503018977:web:37bdff7326c6893f3272a0"
  };
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)