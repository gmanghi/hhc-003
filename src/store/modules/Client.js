import { resolve } from 'url'
import moment from 'moment'
const fb = require('../../firebaseConfig.js')
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
            client_status: 'New'
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
    },
    actions: {
        clearCient({commit}){
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
        },
        createClient({commit, state}){
            return new Promise((resolve, reject) => {
                fb.clientCollection.add({
                    createdOn: new Date(),
                    client_title: state.client.client_title,
                    client_account_name: state.client.client_account_name,
                    client_position_relationship: state.client.client_position_relationship,
                    client_primary_care: state.client.client_primary_care,
                    client_landline_mobile_fax: state.client.client_landline_mobile_fax,
                    client_email: state.client.client_email,
                    client_attending_physician: state.client.client_attending_physician,
                    client_complete_address: state.client.client_complete_address,
                    patient_title: state.client.patient_title,
                    patient_name: state.client.patient_name,
                    patient_age: state.client.patient_age,
                    patient_birthdate: state.client.patient_birthdate,
                    patient_religion: state.client.patient_religion,
                    patient_nationality: state.client.patient_nationality,
                    patient_landline: state.client.patient_landline,
                    patient_mobile: state.client.patient_mobile,
                    patient_email: state.client.patient_email,
                    patient_fax: state.client.patient_fax,
                    patient_complete_address: state.client.patient_complete_address,
                    // patient_case_management: state.client.patient_case_management,
                    // patient_home_vaccination_program: state.client.patient_home_vaccination_program,
                    client_status: state.client.client_status,
                }).then(doc => {
                    this.dispatch("Client/clearCLient")
                    resolve(doc)
                }).catch(error => {
                    this.dispatch("Client/clearClient")
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
                console.log(state.clients)
            })
        },
        getClient({commit, state}) {
            fb.clientCollection.doc(state.client.document_id).get().then(function(doc) {
                if (doc.exists) {
                    const data = doc.data();
                    commit('setClientTitle', data.client_title)
                    commit('setClienAccountName', data.client_account_name)
                    commit('setClientPositionRelationship', data.client_position_relationship)
                    commit('setClientPrimaryCare', data.client_primary_care)
                    commit('setClientLandlineMobileFax', data.client_landline_mobile_fax)
                    commit('setClientEmail', nuldata.client_email)
                    commit('setClientAttendingPhysician', nudata.client_attending_physician)
                    commit('setClientCompleteAddress', data.client_complete_address)
                    commit('setPatienTitle', data.patient_title)
                    commit('setPatientName', data.patient_name)
                    commit('setPatientAge', nudata.patient_age)
                    commit('setPatientBirthdate',  data.patient_birthdate ? moment(data.patient_birthdate.toDate()).format('YYYY-MM-DD') : null)
                    commit('setPatientReligion', data.patient_religion)
                    commit('setPatientNationality', nudata.patient_nationality)
                    commit('setPatientLandline', data.patient_landline)
                    commit('setPatientMobile', data.patient_mobile)
                    commit('setPatientEmail', data.patient_email)
                    commit('setPatientFax', data.patient_fax)
                    commit('setPatientCompleteAddress', data.patient_complete_address)
                    commit('setClientStatus', data.client_status)
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        }
    },
    getters: {
        clients: (state, getters) => {
            return state.clients
        },
        client: (state, getters) => {
            return state.client
        }, 
    }
}

export default Client