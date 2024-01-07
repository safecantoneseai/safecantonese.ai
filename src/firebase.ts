
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA07Au4d6uXfgbPBOY286F4cx0raC4GOkw',
  authDomain: 'safer-canton-ai.firebaseapp.com',
  projectId: 'safer-canton-ai',
  storageBucket: 'safer-canton-ai.appspot.com',
  messagingSenderId: '720646826035',
  appId: '1:720646826035:web:c7aba5f7a8a87e5a301b46',
  measurementId: 'G-TLGVN1G1GF',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
