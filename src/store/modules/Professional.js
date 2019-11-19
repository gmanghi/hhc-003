import { resolve } from 'url'
import moment from 'moment'
const fb = require('../../firebaseConfig.js')
const Professional = {
    namespaced: true,
    state: { 
        professionals: [],
        professional: {
            document_id: null,
            profession: null,
            first_name: null,
            middle_name: null,
            last_name: null,
            address: null,
            mobile_number: null,
            email: null,
            license: null,
            license_expiry_date: '',
            specialty: null,
            coverage: null,
            profession: null,
            status: 'Verified',
            birthdate: '',
            avatar: null,
        },
        
    },
    mutations: { 
        setProfessionals(state, val){
            state.professionals = val
        },
        setProfessional(state, val){
            state.professional = val
        },
        setDocumentId(state, val){
            state.professional.document_id = val
        },
        setProfession(state, val){
            state.professional.profession = val
        },
        setFirstName(state, val){
            state.professional.first_name = val
        },
        setMiddleName(state, val){
            state.professional.middle_name = val
        },
        setLastName(state, val){
            state.professional.last_name = val
        },
        setAddress(state, val){
            state.professional.address = val
        },
        setMobileNumber(state, val){
            state.professional.mobile_number = val
        },
        setEmail(state, val){
            state.professional.email = val
        },
        setLicense(state, val){
            state.professional.license = val
        },
        setLicenseExpiryDate(state, val){
            state.professional.license_expiry_date = val
        },
        setSpecialty(state, val){
            state.professional.specialty = val
        },
        setCoverage(state, val){
            state.professional.coverage = val
        },
        setProfession(state, val){
            state.professional.profession = val
        },
        setStatus(state, val){
            state.professional.status = val
        },
        setBirthdate(state, val){ 
            state.professional.birthdate = val
        },
        setAvatar(state, val){
            state.professional.avatar = val
        },
    },
    actions: { 
        clearProfessional({commit, state}){ 
            return new Promise((resolve, reject) => {
                commit('setFirstName', null)
                commit('setMiddleName', null)
                commit('setLastName', null)
                commit('setAddress', null)
                commit('setMobileNumber', null)
                commit('setEmail', null)
                commit('setLicense', null)
                commit('setLicenseExpiryDate', '')
                commit('setSpecialty', null)
                commit('setCoverage', null)
                commit('setProfession', null)
                commit('setStatus', 'Verified')
                commit('setBirthdate',  '')
                commit('setAvatar', null)
                resolve(state.professional)
            })
        },
        uploadAvatar({commit, state}){
            return new Promise((resolve, reject) => {
                const fileData = state.professional.avatar;
                const fileName =  Math.random().toString(36).substring(2)
                let fileExtension = null;

                switch(fileData.type){
                    case 'image/jpeg': fileExtension = '.jpg';
                    case 'image/png': fileExtension = '.png';
                    case 'image/bmp': fileExtension = '.bmp';
                }

                const storageRef = fb.storage.ref(fileName+fileExtension).put(fileData);

                storageRef.on(`state_changed`, snapshot => {
                    console.log((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                },error => {
                    reject(error)
                },() => {
                    storageRef.snapshot.ref.getDownloadURL().then( (url) => {
                        resolve(url)
                    })
                })
            })
            
        },
        createProfessional({commit, state}){ console.log(state.professional)
            return new Promise((resolve, reject) => {
                if(state.professional.avatar !== null){
                    const parent = this
                    this.dispatch("Professional/uploadAvatar").then(function(url){
                        commit('setAvatar', url)
                        fb.professionalCollection.add(state.professional).then(doc => {
                            parent.dispatch("Professional/clearProfessional")
                            resolve(state.professional)
                        }).catch(error => {
                            parent.dispatch("Professional/clearProfessional")
                            reject(error)
                        })
                    }).catch(function(error){
                        parent.dispatch("Professional/clearProfessional")
                        reject(error)
                    })
                }
                else{
                    fb.professionalCollection.add(state.professional).then(doc => {
                        this.dispatch("Professional/clearProfessional")
                        console.log(state.professional.status)
                        resolve(doc)
                    }).catch(error => {
                        this.dispatch("Professional/clearProfessional")
                        reject(error)
                    })
                }
            })
        },
        updateProfessional({commit, state}){
            return new Promise((resolve, reject) => {
                if(state.professional.avatar !== null && typeof state.professional.avatar == 'object'){ 
                    const parent = this
                    this.dispatch("Professional/uploadAvatar").then(function(url){
                        commit('setAvatar', url)
                        fb.professionalCollection.doc(state.professional.document_id).update(state.professional).then(doc => {
                            parent.dispatch("Professional/clearProfessional")
                            resolve(doc)
                        }).catch(error => {
                            parent.dispatch("Professional/clearProfessional")
                            reject(error)
                        })
                    }).catch(function(error){
                        parent.dispatch("Professional/clearProfessional")
                        reject(error)
                    })
                }
                else{
                    fb.professionalCollection.doc(state.professional.document_id).update(state.professional).then(doc => {
                        this.dispatch("Professional/clearProfessional")
                        console.log(state.professional.status)
                        resolve(doc)
                    }).catch(error => {
                        this.dispatch("Professional/clearProfessional")
                        reject(error)
                    })
                }
            })
        },
        deleteProfessional({state}){
            parent = this
            fb.professionalCollection.doc(state.professional.document_id).delete().then(function() {
                parent.dispatch("Professional/clearProfessional")
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                parent.dispatch("Professional/clearProfessional")
                console.error("Error removing document: ", error);
            });
        },
        getProfessionalsByProfession({commit, state}) {  console.log('by profession')
            fb.professionalCollection
            .where('profession','==',state.professional.profession)
            .orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
                let professionalArray = []
                querySnapshot.forEach(doc => {
                    let professional = doc.data()
                    professional.id = doc.id
                    professionalArray.push(professional)
                })

                commit('setProfessionals', professionalArray)
            })
        },
        getProfessionalsByStatusNew({commit, state}) {
            fb.professionalCollection
            .where('status','==','New')
            .orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
                let professionalArray = []
                querySnapshot.forEach(doc => {
                    let professional = doc.data()
                    professional.id = doc.id
                    professionalArray.push(professional)
                })

                commit('setProfessionals', professionalArray)
            })
        },
        getProfessionalsByStatus({commit, state}) {
            fb.professionalCollection
            .where('status','==',state.professional.status)
            .orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
                let professionalArray = []
                querySnapshot.forEach(doc => {
                    let professional = doc.data()
                    professional.id = doc.id
                    professionalArray.push(professional)
                })

                commit('setProfessionals', professionalArray)
            })
        },
        getProfessionalsByProfessionAndStatus({commit, state}) {  
            console.log('by profession',state.professional.profession)
            console.log('by status',state.professional.status)
            fb.professionalCollection
            .where('profession','==',state.professional.profession)
            .where('status','==',state.professional.status)
            .orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
                let professionalArray = []
                querySnapshot.forEach(doc => {
                    let professional = doc.data()
                    professional.id = doc.id
                    professionalArray.push(professional)
                })
                console.log(professionalArray)
                commit('setProfessionals', professionalArray)
            })
        },
        getProfessionals({commit, state}) {
            fb.professionalCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
                let professionalArray = []
                querySnapshot.forEach(doc => {
                    let professional = doc.data()
                    professional.id = doc.id
                    professionalArray.push(professional)
                })

                commit('setProfessionals', professionalArray)
            })
        },
        getProfessional({commit, state}) {
            return new Promise((resolve, reject) => { 
                fb.professionalCollection.doc(state.professional.document_id).get().then(function(doc) {
                    if (doc.exists) {
                        const data = doc.data();
                        data.createdOn = moment(data.createdOn.toDate()).format('YYYY-MM-DD')
                        data.birthdate = moment(data.birthdate.toDate()).format('YYYY-MM-DD')
                        data.license_expiry_date = moment(data.license_expiry_date.toDate()).format('YYYY-MM-DD')
                        commit('setProfessional', data)
                        commit('setDocumentId', doc.id)
                        // console.log(state.professional)
                        resolve(state.professional)
                        
                        // commit('setProfession', data.profession)
                        // commit('setFirstName', data.first_name)
                        // commit('setMiddleName', data.middle_name)
                        // commit('setLastName', data.last_name)
                        // commit('setEmail', data.email)
                        // commit('setMobileNumber', data.mobile_number)
                        // commit('setBirthdate', data.birthdate ? moment(data.birthdate.toDate()).format('YYYY-MM-DD') : null) 
                        // commit('setAvatar', data.avatar)
                        // commit('setStatus', data.status)
                        // console.log("Documents data:", doc.data());
                    } else {
                        reject("No such document!");
                    }
                }).catch(function(error) {
                    reject("Error getting document:", error);
                });
            })
        }
    },
    getters: { 
        professionals: (state, getters) => {
            return state.professionals
        },
        professional: (state, getters) => {
            return state.professional
        }, 
    }
}

export default Professional