import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyBYo90cdkRxnOQtQI2U-btY-sAl1H5Uwic",
    authDomain: "newapp-16930.firebaseapp.com",
    databaseURL: "https://newapp-16930.firebaseio.com",
    projectId: "newapp-16930",
    storageBucket: "newapp-16930.appspot.com",
    messagingSenderId: "467001444069",
    appId: "1:467001444069:web:5bde4e9a4672938b38f60c"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

export default fire;