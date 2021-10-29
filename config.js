import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyBqqOWVCCdQUKvg-c5J1v-XwHroSh8Zlwk",
  authDomain: "pro-71-c656d.firebaseapp.com",
  projectId: "pro-71-c656d",
  storageBucket: "pro-71-c656d.appspot.com",
  messagingSenderId: "896625581164",
  appId: "1:896625581164:web:7eef5b07147493cdd24c49"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

