import { resolve } from 'url'
import moment from 'moment'
const fb = require('../../firebaseInit.js')
const Client = {
    namespaced: true,
    state: { 
        clients: [],
        client: {
            document_id: null,
            client_title: null,
            client_account_name: null,
            client_position_relationship: null,
            client_primary_care: null,
            client_landline_mobile_fax: null,
            client_email: null,
            client_attending_physician: null,
            client_complete_address: null,
            patient_title: null,
            patient_name: null,
            patient_age: null,
            patient_birthdate: '1950-01-01',
            patient_religion: null,
            patient_nationality: null,
            patient_landline: null,
            patient_mobile: null,
            patient_email: null,
            patient_fax: null,
            patient_complete_address: null,
            patient_case_management: null,
            patient_home_vaccination_program: null,
            client_status: 'New',
            contracts: [],
            contract: {},
            hidss: [],
            hids: {},
            hvrpns: [],
            hvrpn: {},
            prescriptions: [],
            prescription: {},
            patient_medication_profiles: [],
            patient_medication_profile: {},
            customer_satisfaction_surveys: [],
            customer_satisfaction_survey: {},
        },
    },
    mutations: {
        setClients(state, val){
            state.clients = val
        },
        setClient(state, val){
            state.client = val
        },
        setDocumentId(state, val){
            state.client.document_id = val
        },
        setClientTitle(state, val){
            state.client.client_title = val
        },
        setClienAccountName(state, val){
            state.client.client_account_name = val
        },
        setClientPositionRelationship(state, val){
            state.client.client_position_relationship = val
        },
        setClientPrimaryCare(state, val){
            state.client.client_primary_care = val
        },
        setClientLandlineMobileFax(state, val){
            state.client.client_landline_mobile_fax = val
        },
        setClientEmail(state, val){
            state.client.client_email = val
        },
        setClientAttendingPhysician(state, val){ 
            state.client.client_attending_physician = val
        },
        setClientCompleteAddress(state, val){
            state.client.client_complete_address = val
        },
        setPatienTitle(state, val){
            state.client.patient_title = val
        },
        setPatientName(state, val){
            state.client.patient_name = val
        },
        setPatientAge(state, val){
            state.client.patient_age = val
        },
        setPatientBirthdate(state, val){
            state.client.patient_birthdate = val
        },
        setPatientReligion(state, val){
            state.client.patient_religion = val
        },
        setPatientNationality(state, val){
            state.client.patient_nationality = val
        },
        setPatientLandline(state, val){
            state.client.patient_landline = val
        },
        setPatientMobile(state, val){
            state.client.patient_mobile = val
        },
        setPatientEmail(state, val){
            state.client.patient_email = val
        },
        setPatientFax(state, val){
            state.client.patient_fax = val
        },
        setPatientCompleteAddress(state, val){
            state.client.patient_complete_address = val
        },
        setPatientCaseManagement(state, val){
            state.client.patient_case_management = val
        },
        setPatientHomeVaccinationProgram(state, val){
            state.client.patient_home_vaccination_program = val
        }, 
        setClientStatus(state, val){
            state.client.client_status = val
        },
        setClientContracts(state, val){
            state.client.contracts = val
        },
        setClientContract(state, val){
            state.client.contract = val
        },
        setClientContractUrl(state, val){
            state.client.contract.url = val
        },
        setClientHidss(state, val){
            state.client.hidss = val
        },
        setClientHids(state, val){
            state.client.hids = val
        },
        setClientHVRPNs(state, val){
            state.client.hvrpns = val
        },
        setClientHVRPN(state, val){
            state.client.hvrpn = val
        },
        setClientHVRPNDocumentId(state, val){
            state.client.hvrpn.document_id = val
        },
        setClientPrescriptions(state, val){
            state.client.prescriptions = val
        },
        setClientPrescription(state, val){
            state.client.prescription = val
        },
        setClientPrescriptionDocumentId(state, val){
            state.client.prescription.document_id = val
        },
        setClientPatientMedicationProfiles(state, val){
            state.client.patient_medication_profiles = val
        },
        setClientPatientMedicationProfile(state, val){
            state.client.patient_medication_profile = val
        },
        setClientPatientMedicationProfileDocumentId(state, val){
            state.client.patient_medication_profile.document_id = val
        },
        setClientCustomerSatisfactionSurveys(state, val){
            state.client.customer_satisfaction_surveys = val
        },
        setClientCustomerSatisfactionSurvey(state, val){
            state.client.customer_satisfaction_survey = val
        },
        setClientCustomerSatisfactionSurveyDocumentId(state, val){
            state.client.customer_satisfaction_survey.document_id = val
        },
        setClientHidsDocumentId(state, val){
            state.client.hids.document_id = val
        },
        setClientHidsDemographic(state, val){
            state.client.hids.demographic = val
        },
        setClientHidsHistoryPresentIllness(state, val){
            state.client.hids.hopl = val
        },
    },
    actions: {
        clearClient({commit}){
            // commit('setClient', null)
            commit('setClientTitle', null)
            commit('setClienAccountName', null)
            commit('setClientPositionRelationship', null)
            commit('setClientPrimaryCare', null)
            commit('setClientLandlineMobileFax', null)
            commit('setClientEmail', null)
            commit('setClientAttendingPhysician', null)
            commit('setClientCompleteAddress', null)
            commit('setPatienTitle', null)
            commit('setPatientName', null)
            commit('setPatientAge', null)
            commit('setPatientBirthdate', '1950-01-01',)
            commit('setPatientReligion', null)
            commit('setPatientNationality', null)
            commit('setPatientLandline', null)
            commit('setPatientMobile', null)
            commit('setPatientEmail', null)
            commit('setPatientFax', null)
            commit('setPatientCompleteAddress', null)
            // commit('setPatientCaseManagement', null)
            // commit('setPatientHomeVaccinationProgram', null)
            commit('setClientStatus', 'New')
            // commit('setClientContracts', [])
            // commit('setClientContracts', {})
        },
        createClient({commit, state}){
            return new Promise((resolve, reject) => {
                fb.clientCollection.add(state.client).then(doc => {
                    this.dispatch("Client/clearClient")
                    resolve(doc)
                }).catch(error => {
                    this.dispatch("Client/clearClient")
                    reject(error)
                })
            })
        },
        updateClient({commit, state}){
            return new Promise((resolve, reject) => {
                fb.clientCollection.doc(state.client.document_id).update(state.client).then(doc => {
                    // this.dispatch("Client/clearClient")
                    resolve(doc)
                }).catch(error => {
                    // this.dispatch("Client/clearClient")
                    reject(error)
                })
            })
        },
        createClientContract({commit, state}){
            return new Promise((resolve, reject) => {
                const fileData = state.client.contract.url;
                const fileName =  Math.random().toString(36).substring(2)
                let fileExtension = null;

                switch(fileData.type){
                    case 'application/pdf': fileExtension = '.pdf';
                }

                const storageRef = fb.storage.ref(fileName+fileExtension).put(fileData);

                storageRef.on(`state_changed`, snapshot => {
                    console.log((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                },error => {
                    reject(error)
                },() => {
                    storageRef.snapshot.ref.getDownloadURL().then( (url) => {
                        commit('setClientContractUrl', url)
                        fb.clientCollection.doc(state.client.document_id).collection('contract').add({
                            createdOn: new Date(),
                            url: state.client.contract.url,
                        }).then(doc => {
                            resolve(doc)
                        }).catch(error => {
                            reject(error)
                        })
                    })
                })

                
            })
        },
        createClientHids({commit, state}){
            return new Promise((resolve, reject) => { 
                fb.clientCollection.doc(state.client.document_id).collection('hids').add(state.client.hids).then(doc => {
                    resolve(doc)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        updateClientHids({commit, state}){
            return new Promise((resolve, reject) => {
                fb.clientCollection.doc(state.client.document_id).collection('hids').doc(state.client.hids.document_id).update(state.client.hids).then(function() {
                    resolve(state.client.hids)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getClients({commit, state}) {
            fb.clientCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
                let clientArray = []
                querySnapshot.forEach(doc => {
                    let client = doc.data()
                    client.document_id = doc.id
                    clientArray.push(client)
                })
                commit('setClients', clientArray)
            })
        },
        getClient({commit, state}) {
            return new Promise((resolve, reject) => { 
                fb.clientCollection.doc(state.client.document_id).get().then(function(doc) {
                    if (doc.exists) {
                        const data = doc.data();
                        commit('setClient', data)
                        resolve(state.client)
                    } else {
                        reject("No such document!");
                    }
                }).catch(function(error) {
                    reject("Error getting document:", error);
                });
            })
        },
        getClientContracts({commit, state}) {
            fb.clientCollection.doc(state.client.document_id).collection('contract').orderBy('createdOn','desc').onSnapshot(querySnapshot => {
                let clientContractArray = []
                querySnapshot.forEach(doc => {
                    let contract = doc.data()
                    contract.document_id = doc.id
                    contract.createdOn = moment(contract.createdOn.toDate()).format('YYYY-MM-DD HH:mm:ss')
                    clientContractArray.push(contract)
                })

                commit('setClientContracts', clientContractArray)
            })
        },
        getClientHidss({commit, state}) {
            fb.clientCollection.doc(state.client.document_id).collection('hids').orderBy('createdOn','desc').onSnapshot(querySnapshot => {
                let clientHidsArray = []
                querySnapshot.forEach(doc => {
                    let hids = doc.data()
                    hids.document_id = doc.id
                    hids.createdOn = moment(hids.createdOn.toDate()).format('YYYY-MM-DD HH:mm:ss')
                    clientHidsArray.push(hids)
                })

                commit('setClientHidss', clientHidsArray)
            })
        },
        getClientHids({commit, state}) {
            return new Promise((resolve, reject) => {
                fb.clientCollection.doc(state.client.document_id).collection('hids').doc(state.client.hids.document_id).onSnapshot(function(doc) {
                    if (doc.exists) {
                        const data = doc.data();
                        commit('setClientHids', data)
                        commit('setClientHidsDocumentId',doc.id)
                        resolve(state.client.hids)
                    } else {
                        reject("No such document!");
                    }
                }, function(error) {
                    console.log("Error getting document:", error);
                });
            })
        },
        getClientHVRPNs({commit, state}) {
            fb.clientCollection.doc(state.client.document_id).collection('hvrpn').orderBy('createdOn','desc').onSnapshot(querySnapshot => {
                let clientHVRPNArray = []
                querySnapshot.forEach(doc => {
                    let hvrpn = doc.data()
                    hvrpn.document_id = doc.id
                    hvrpn.createdOn = moment(hvrpn.createdOn.toDate()).format('YYYY-MM-DD HH:mm:ss')
                    clientHVRPNArray.push(hvrpn)
                })

                commit('setClientHVRPNs', clientHVRPNArray)
            })
        },
        getClientHVRPN({commit, state}) {
            return new Promise((resolve, reject) => {
                fb.clientCollection.doc(state.client.document_id).collection('hvrpn').doc(state.client.hvrpn.document_id).onSnapshot(function(doc) {
                    if (doc.exists) {
                        const data = doc.data()
                        data.document_id = doc.id
                        commit('setClientHVRPN', data)
                        // commit('setClientHidsDocumentId',doc.id)
                        resolve(state.client.hvrpn)
                    } else {
                        reject("No such document!");
                    }
                }, function(error) {
                    console.log("Error getting document:", error);
                });

                // fb.clientCollection.doc(state.client.document_id).collection('hvrpn').doc(state.client.hvrpn.document_id).get().then(function(doc) {
                //     if (doc.exists) {
                //         const data = doc.data()
                //         data.document_id = doc.id
                //         commit('setClientHVRPN', data)
                //         // commit('setClientHidsDocumentId',doc.id)
                //         resolve(state.client.hvrpn)
                //     } else {
                //         reject("No such document!");
                //     }
                // }).catch(function(error) {
                //     reject("Error getting document:", error);
                // });
            })
            
        },
        createClientHVRPN({commit, state}){
            return new Promise((resolve, reject) => { 
                fb.clientCollection.doc(state.client.document_id).collection('hvrpn').add(state.client.hvrpn).then(doc => {
                    resolve(doc)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        updateClientHVRPN({commit, state}){
            return new Promise((resolve, reject) => {
                fb.clientCollection.doc(state.client.document_id).collection('hvrpn').doc(state.client.hvrpn.document_id).update(state.client.hvrpn).then(function() {
                    resolve(state.client.hvrpn)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getClientPrescriptions({commit, state}) {
            fb.clientCollection.doc(state.client.document_id).collection('prescription').orderBy('createdOn','desc').onSnapshot(querySnapshot => {
                let clientPrescriptionNArray = []
                querySnapshot.forEach(doc => {
                    let prescription = doc.data()
                    prescription.document_id = doc.id
                    prescription.createdOn = moment(prescription.createdOn.toDate()).format('YYYY-MM-DD HH:mm:ss')
                    clientPrescriptionNArray.push(prescription)
                })

                commit('setClientPrescriptions', clientPrescriptionNArray)
            })
        },
        getClientPrescription({commit, state}) {
            return new Promise((resolve, reject) => {
                fb.clientCollection.doc(state.client.document_id).collection('prescription').doc(state.client.prescription.document_id).onSnapshot(function(doc) {
                    if (doc.exists) {
                        const data = doc.data()
                        data.document_id = doc.id
                        commit('setClientPrescription', data)
                        // commit('setClientHidsDocumentId',doc.id)
                        resolve(state.client.prescription)
                    } else {
                        reject("No such document!");
                    }
                }, function(error) {
                    console.log("Error getting document:", error);
                });

                // fb.clientCollection.doc(state.client.document_id).collection('prescription').doc(state.client.prescription.document_id).get().then(function(doc) {
                //     if (doc.exists) {
                //         const data = doc.data()
                //         data.document_id = doc.id
                //         commit('setClientPrescription', data)
                //         // commit('setClientHidsDocumentId',doc.id)
                //         resolve(state.client.prescription)
                //     } else {
                //         reject("No such document!");
                //     }
                // }).catch(function(error) {
                //     reject("Error getting document:", error);
                // });
            })
            
        },
        createClientPrescription({commit, state}){
            return new Promise((resolve, reject) => { 
                fb.clientCollection.doc(state.client.document_id).collection('prescription').add(state.client.prescription).then(doc => {
                    resolve(doc)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        updateClientPrescription({commit, state}){
            return new Promise((resolve, reject) => {
                fb.clientCollection.doc(state.client.document_id).collection('prescription').doc(state.client.prescription.document_id).update(state.client.prescription).then(function() {
                    resolve(state.client.prescription)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getClientPatientMedicationProfiles({commit, state}) {
            fb.clientCollection.doc(state.client.document_id).collection('patient_medication_profile').orderBy('createdOn','desc').onSnapshot(querySnapshot => {
                let clientPatientMedicationProfilesArray = []
                querySnapshot.forEach(doc => {
                    let pmp = doc.data()
                    pmp.document_id = doc.id
                    pmp.createdOn = moment(pmp.createdOn.toDate()).format('YYYY-MM-DD HH:mm:ss')
                    clientPatientMedicationProfilesArray.push(pmp)
                })

                commit('setClientPatientMedicationProfiles', clientPatientMedicationProfilesArray)
            })
        },
        getClientPatientMedicationProfile({commit, state}) {
            return new Promise((resolve, reject) => {
                fb.clientCollection.doc(state.client.document_id).collection('patient_medication_profile').doc(state.client.patient_medication_profile.document_id).onSnapshot(function(doc) {
                    if (doc.exists) {
                        const data = doc.data()
                        data.document_id = doc.id
                        commit('setClientPatientMedicationProfile', data)
                        // commit('setClientHidsDocumentId',doc.id)
                        resolve(state.client.patient_medication_profile)
                    } else {
                        reject("No such document!");
                    }
                }, function(error) {
                    console.log("Error getting document:", error);
                });

                // fb.clientCollection.doc(state.client.document_id).collection('patient_medication_profile').doc(state.client.patient_medication_profile.document_id).get().then(function(doc) {
                //     if (doc.exists) {
                //         const data = doc.data()
                //         data.document_id = doc.id
                //         commit('setClientPatientMedicationProfile', data)
                //         // commit('setClientHidsDocumentId',doc.id)
                //         resolve(state.client.patient_medication_profile)
                //     } else {
                //         reject("No such document!");
                //     }
                // }).catch(function(error) {
                //     reject("Error getting document:", error);
                // });
            })
            
        },
        createClientPatientMedicationProfile({commit, state}){
            return new Promise((resolve, reject) => { 
                fb.clientCollection.doc(state.client.document_id).collection('patient_medication_profile').add(state.client.patient_medication_profile).then(doc => {
                    resolve(doc)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        updateClientPatientMedicationProfile({commit, state}){
            return new Promise((resolve, reject) => {
                fb.clientCollection.doc(state.client.document_id).collection('patient_medication_profile').doc(state.client.patient_medication_profile.document_id).update(state.client.patient_medication_profile).then(function() {
                    resolve(state.client.patient_medication_profile)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getClientCustomerSatisfactionSurveys({commit, state}) {
            fb.clientCollection.doc(state.client.document_id).collection('customer_satisfaction_survey').orderBy('createdOn','desc').onSnapshot(querySnapshot => {
                let clientCustomerSatisfactionSurveysNArray = []
                querySnapshot.forEach(doc => {
                    let css = doc.data()
                    css.document_id = doc.id
                    css.createdOn = moment(css.createdOn.toDate()).format('YYYY-MM-DD HH:mm:ss')
                    clientCustomerSatisfactionSurveysNArray.push(css)
                })

                commit('setClientCustomerSatisfactionSurveys', clientCustomerSatisfactionSurveysNArray)
            })
        },
        getClientCustomerSatisfactionSurvey({commit, state}) {
            return new Promise((resolve, reject) => {
                fb.clientCollection.doc(state.client.document_id).collection('customer_satisfaction_survey').doc(state.client.customer_satisfaction_survey.document_id).onSnapshot(function(doc) {
                    if (doc.exists) {
                        const data = doc.data()
                        data.document_id = doc.id
                        commit('setClientCustomerSatisfactionSurvey', data)
                        // commit('setClientHidsDocumentId',doc.id)
                        resolve(state.client.customer_satisfaction_survey)
                    } else {
                        reject("No such document!");
                    }
                }, function(error) {
                    console.log("Error getting document:", error);
                });

                // fb.clientCollection.doc(state.client.document_id).collection('customer_satisfaction_survey').doc(state.client.customer_satisfaction_survey.document_id).get().then(function(doc) {
                //     if (doc.exists) {
                //         const data = doc.data()
                //         data.document_id = doc.id
                //         commit('setClientCustomerSatisfactionSurvey', data)
                //         // commit('setClientHidsDocumentId',doc.id)
                //         resolve(state.client.customer_satisfaction_survey)
                //     } else {
                //         reject("No such document!");
                //     }
                // }).catch(function(error) {
                //     reject("Error getting document:", error);
                // });
            })
            
        },
        createClientCustomerSatisfactionSurvey({commit, state}){
            return new Promise((resolve, reject) => { 
                fb.clientCollection.doc(state.client.document_id).collection('customer_satisfaction_survey').add(state.client.customer_satisfaction_survey).then(doc => {
                    resolve(doc)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        updateClientCustomerSatisfactionSurvey({commit, state}){
            return new Promise((resolve, reject) => {
                fb.clientCollection.doc(state.client.document_id).collection('customer_satisfaction_survey').doc(state.client.customer_satisfaction_survey.document_id).update(state.client.customer_satisfaction_survey).then(function() {
                    resolve(state.client.customer_satisfaction_survey)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    },
    getters: {
        clients: (state, getters) => {
            return state.clients
        },
        client: (state, getters) => {
            return state.client
        }, 
        client_name: (state, getters) => {
            return state.client_account_name
        }, 
        patient_name: (state, getters) => {
            return state.patient_name
        }, 
        contracts: (state, getters) => {
            return state.client.contracts
        },
        hidss: (state, getters) => {
            return state.client.hidss
        },
        hvrpns: (state, getters) => {
            return state.client.hvrpns
        },
        prescriptions: (state, getters) => {
            return state.client.prescriptions
        },
        patient_medication_profiles: (state, getters) => {
            return state.client.patient_medication_profiles
        },
        customer_satisfaction_surveys: (state, getters) => {
            return state.client.customer_satisfaction_surveys
        },
    }
}

export default Client