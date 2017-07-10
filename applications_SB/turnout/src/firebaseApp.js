import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDJzlnGHBqY2Hw7W6bpZ3889wvai7hMFPg",
  authDomain: "tuto-turnout.firebaseapp.com",
  databaseURL: "https://tuto-turnout.firebaseio.com",
  projectId: "tuto-turnout",
  storageBucket: "",
  messagingSenderId: "71527330828"
}

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
