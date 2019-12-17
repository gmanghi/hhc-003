const fb = require('../../firebaseInit.js')
export default {
    namespaced: true,
    state: {
        currentUser: null,
        currentUserEmail: null,
        userProfile: {},
        users: []
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
        setUsers(state, val){
            state.users = val
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
        },
        fetchUsers({ commit, state }) {
            fb.usersCollection.orderBy('name','desc').onSnapshot(querySnapshot => {
                let a = []
                querySnapshot.forEach(doc => {
                    let b = doc.data()
                    a.push(b)
                })
                commit('setUsers', a)
            }, function(err) {
                console.log(err)
            });
        },
    },
    getters: {
        getFileData: (state, getters) => {
            return state.fileData
        },
        getCurrentUserProfile: (state, getters) => {
            if(state.userProfile){
                return state.userProfile
            }
        },
        getCurrentUserEmail: (state, getters) => {
            if(state.currentUser){
                return state.currentUser.email
            }
        },
        getCurrentUserId: (state, getters) => {
            if(state.currentUser){
                return state.currentUser.uid
            }
        },
        getUsers: (state, getters) => {
            if(state.users){
                return state.users
            }
        },
    }
}   