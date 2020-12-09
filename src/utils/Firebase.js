import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

firebase.initializeApp(Expo.Constants.manifest.extra.firebase)
  
const db = firebase.firestore()
const storage = firebase.storage()
export {firebase, db, storage}; 