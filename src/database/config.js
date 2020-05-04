import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAXgRVu2ipCRDYVi7VY6r-KdfHq7_MTLnI",
  authDomain: "photowall-6ea67.firebaseapp.com",
  databaseURL: "https://photowall-6ea67.firebaseio.com",
  projectId: "photowall-6ea67",
  storageBucket: "photowall-6ea67.appspot.com",
  messagingSenderId: "22038660952",
  appId: "1:22038660952:web:e793fdb202357d09ae472d",
};

firebase.initializeApp(config);

const database = firebase.database()

export {database}