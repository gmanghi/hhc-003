import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'

const fb = require('.././firebaseConfig.js')

fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')

    // realtime updates from our members collection
    fb.teamsCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
      let membersArray = []

      querySnapshot.forEach(doc => {
          let member = doc.data()
          member.id = doc.id
          membersArray.push(member)
      })

      store.commit('team/setMembers', membersArray)
    })
  }
})

Vue.use(Vuex)

// handle page reload
fb.auth.onAuthStateChanged(user => {
  if (user) {
      store.commit('setCurrentUser', user)
      store.dispatch('fetchUserProfile')
  }
})

export default new Vuex.Store({
  namespaced: true,
  state: {
    currentUser: null,
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
    }
  },
  modules: {
    team: {
      namespaced: true,
      state: { 
        mouse: 'genius',
        members: [],
        member: {}
      },
      mutations: { 
        setMembers(state, val){
          state.members = val
        },
        setMember(state, val){
          state.member = val
        }
      },
      actions: { 

      },
      getters: {
        members: (state, getters) => { 
          return state.members
        },
        member: (state, getter) => { console.log('hello', state.member);
          return state.member
        }
      }
    }
  },
})
