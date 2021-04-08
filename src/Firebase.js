import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD0HIDSH8HYAsZZFv2bmtVewz5TE7b4YkY",
    authDomain: "friends-12bd0.firebaseapp.com",
    projectId: "friends-12bd0",
    storageBucket: "friends-12bd0.appspot.com",
    messagingSenderId: "306782589151",
    appId: "1:306782589151:web:f4a0abf7cc0c77ca8cd96a"
};
// Initialize Firebase
var firebaseDb = firebase.initializeApp(firebaseConfig);

export default firebaseDb;