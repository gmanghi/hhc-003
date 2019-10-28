import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyAzMkhnDj2Ic2ErfngKZBmGnKIgUGZrFI8",
    authDomain: "hhc-002.firebaseapp.com",
    databaseURL: "https://hhc-002.firebaseio.com",
    projectId: "hhc-002",
    storageBucket: "hhc-002.appspot.com",
    messagingSenderId: "542286775450"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage();
const currentUser = auth.currentUser

// date issue fix according to firebase
// const settings = {
//     timestampsInSnapshots: true
// }
// db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const caregiversCollection = db.collection('caregivers')
const applicantsCollection = db.collection('applicants')
const physiciansCollection = db.collection('physicians')
const physicaltherapistsCollection = db.collection('physicaltherapists')
const nursesCollection = db.collection('nurses')
const teamsCollection = db.collection('teams')

export {
    db,
    auth,
    storage,
    currentUser,
    usersCollection,
    caregiversCollection,
    applicantsCollection,
    physiciansCollection,
    physicaltherapistsCollection,
    nursesCollection,
    teamsCollection
}