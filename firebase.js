// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC3rCHkFlHIg3z5y9piImSgQ65yC9cbZs8",
  authDomain: "labjo-b2348.firebaseapp.com",
  databaseURL: "https://labjo-b2348.firebaseio.com",
  projectId: "labjo-b2348",
  storageBucket: "labjo-b2348.appspot.com",
  messagingSenderId: "331708723648"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const topicsRef = firebase.database().ref();
