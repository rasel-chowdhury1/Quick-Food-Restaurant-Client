// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   // apiKey: "AIzaSyBIIkEq1HXz91NdLvQzdTBP2Fcf6yh03cs",
//   // authDomain: "bistro-boss-restaurant-6ee54.firebaseapp.com",
//   // projectId: "bistro-boss-restaurant-6ee54",
//   // storageBucket: "bistro-boss-restaurant-6ee54.appspot.com",
//   // messagingSenderId: "106436017511",
//   // appId: "1:106436017511:web:62ac2fb304024d526583c2",
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxnSVclZS2fcgqXSDJ6newQFeenbisQO4",
  authDomain: "quick-food-restaurant.firebaseapp.com",
  projectId: "quick-food-restaurant",
  storageBucket: "quick-food-restaurant.appspot.com",
  messagingSenderId: "429393232893",
  appId: "1:429393232893:web:6b4fcb50e421e7dc5a0f94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;