import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAQ94z5vdPeslAYrxDqP6JdIrAaPIYfwQU',
    authDomain: 'nuxt-hotel.firebaseapp.com',
    databaseURL: 'https://nuxt-hotel.firebaseio.com',
    projectId: 'nuxt-hotel',
    storageBucket: 'nuxt-hotel.appspot.com',
    messagingSenderId: '1084810584765',
    appId: '1:1084810584765:web:3fcc2c02dcf21f2a358dd4',
    measurementId: 'G-9D3ESF13XK',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
