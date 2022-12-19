import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAVPjTsKmc6F1dmWAB-M8b9YPcf-gnupEQ",
//   authDomain: "project-martha-e7c69.firebaseapp.com",
//   projectId: "project-martha-e7c69",
//   storageBucket: "project-martha-e7c69.appspot.com",
//   messagingSenderId: "239197673255",
//   appId: "1:239197673255:web:95c5f5c9dc5b5053e67b02"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBJOdQamoNDxp8V2jdod0ilB61-qz0hJfo",
  authDomain: "fir-upload-4f7b5.firebaseapp.com",
  projectId: "fir-upload-4f7b5",
  storageBucket: "fir-upload-4f7b5.appspot.com",
  messagingSenderId: "1013316864196",
  appId: "1:1013316864196:web:a62435af859b26011ee191"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
const app = initializeApp(firebaseConfig);

// Firebase storage reference
const storage = getStorage(app);
export default storage;