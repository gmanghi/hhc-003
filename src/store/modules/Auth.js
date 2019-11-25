const fb = require('../../firebaseInit.js')
export default {
    namespaced: true,
    state: {
        currentUser: null,
        currentUserEmail: null,
        userProfile: {},
        // members: [],
        fileData: {},
        
    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        setUserProfile(state, val) {
            state.userProfile = val
        },
        // setMembers(state, val){
        //   state.members = val
        // },
        setFileData(state, val){
            state.fileData = val
        }
    },
    actions: {
        clearData({commit}){
            commit('setCurrentUser', null)
            commit('setUserProfile', {})
        },
        fetchUserProfile({ commit, state }) {
            fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
                commit('setUserProfile', res.data())
            }).catch(err => {
                console.log(err)
            })
        }
    },
    getters: {
        getFileData: (state, getters) => {
            return state.fileData
        },
        getCurrentUserEmail: (state, getters) => {
            if(state.currentUser){
                return state.currentUser.email
            }
        },
    }
}   