import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjLDRelKJ1xZ4pMpLkEIPMH6O-XWbRdZ4",
  authDomain: "aswin-portfolio-6c639.firebaseapp.com",
  projectId: "aswin-portfolio-6c639",
  storageBucket: "aswin-portfolio-6c639.appspot.com",
  messagingSenderId: "784745855248",
  appId: "1:784745855248:web:802c9c408261865cce8d95",
  measurementId: "G-4XVRP0H9VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics only when supported (browser environments)
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
