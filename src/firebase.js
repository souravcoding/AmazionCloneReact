import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBUnkZKxSyq3HUBcGG4aYCocpYOyoYXnDo",
  authDomain: "clone-react-7791a.firebaseapp.com",
  projectId: "clone-react-7791a",
  storageBucket: "clone-react-7791a.appspot.com",
  messagingSenderId: "579071055273",
  appId: "1:579071055273:web:94557a6705ca693743e0b8",
  measurementId: "G-V0EJCVLBP7"

})

// const db=firebaseApp.fireStore()
const auth=firebase.auth()

export {auth}