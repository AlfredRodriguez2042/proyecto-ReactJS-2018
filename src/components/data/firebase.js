import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC8VyzlSayUVw0XLD02NlqllQAjjVYci10",
    authDomain: "mi-primer-proyecto-9a850.firebaseapp.com",
    databaseURL: "https://mi-primer-proyecto-9a850.firebaseio.com",
    projectId: "mi-primer-proyecto-9a850",
    storageBucket: "mi-primer-proyecto-9a850.appspot.com",
    messagingSenderId: "379085054742"

}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth