import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJOdQamoNDxp8V2jdod0ilB61-qz0hJfo",
  authDomain: "fir-upload-4f7b5.firebaseapp.com",
  projectId: "fir-upload-4f7b5",
  storageBucket: "fir-upload-4f7b5.appspot.com",
  messagingSenderId: "1013316864196",
  appId: "1:1013316864196:web:a62435af859b26011ee191"
};
 
const app = initializeApp(firebaseConfig);

// Firebase storage reference
const storage = getStorage(app);
export default storage;