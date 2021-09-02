import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAON_ItJimUn6HMcJPokpji4rNsRzAQzww",
    authDomain: "chat-react-redux-80238.firebaseapp.com",
    databaseURL: "https://chat-react-redux-80238-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-react-redux-80238",
    storageBucket: "chat-react-redux-80238.appspot.com",
    messagingSenderId: "1091769298317",
    appId: "1:1091769298317:web:e37da6a80f56edd758e1c4",
    measurementId: "G-T2W331Q34G"
};
export const firebaseApp = firebase.initializeApp (firebaseConfig)
export const db = firebaseApp.database ()