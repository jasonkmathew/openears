import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUgjtEMFokyk06hi2jqXN-ZvJED7XF2DQ",
    authDomain: "openearsdemo.firebaseapp.com",
    projectId: "openearsdemo",
    storageBucket: "openearsdemo.firebasestorage.app",
    messagingSenderId: "747558455458",
    appId: "1:747558455458:web:16b83bf7abb889ed0e2ffb",
    measurementId: "G-FFSEH3WDMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
