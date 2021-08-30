import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDcDd2Y08rQT9kSUk0DofwnsRdGdE-KNOY",
    authDomain: "store-db-d1a25.firebaseapp.com",
    projectId: "store-db-d1a25",
    storageBucket: "store-db-d1a25.appspot.com",
    messagingSenderId: "243315386382",
    appId: "1:243315386382:web:c0ccda35ddaab557eeb45f",
    measurementId: "G-XF2G21JHZ2"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase