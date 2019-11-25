import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from '@/firebaseConfig'
// firebase init goes here

firebase.initializeApp(firebaseConfig)

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
// const caregiversCollection = db.collection('caregivers')
// const applicantsCollection = db.collection('applicants')
// const physiciansCollection = db.collection('physicians')
// const physicaltherapistsCollection = db.collection('physicaltherapists')
// const nursesCollection = db.collection('nurses')
const teamsCollection = db.collection('teams')
const professionalCollection = db.collection('professional')
const clientCollection = db.collection('client')
const visitCollection = db.collection('visit')

export {
    db,
    auth,
    storage,
    currentUser,
    firebase,
    usersCollection,
    // caregiversCollection,
    // applicantsCollection,
    // physiciansCollection,
    // physicaltherapistsCollection,
    // nursesCollection,
    teamsCollection,
    professionalCollection,
    clientCollection,
    visitCollection,
}