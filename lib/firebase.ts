import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAfXDMbLxYIS8fP7oMZekTHN2D6EAdMU1I",
    authDomain: "iot-pi-598c6.firebaseapp.com",
    projectId: "iot-pi-598c6",
    storageBucket: "iot-pi-598c6.appspot.com",
    messagingSenderId: "798476571949",
    appId: "1:798476571949:web:d5d02b553eef5313426fa4",
    measurementId: "G-2JT41QXM0Y"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
