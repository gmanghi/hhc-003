import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'
import Auth from './modules/Auth'
import Member from './modules/Member'
import Professional from './modules/Professional'
import Client from './modules/Client'
import ClientVisits from './modules/ClientVisits'

const fb = require('.././firebaseConfig.js')

fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('Auth/setCurrentUser', user)
    store.dispatch('Auth/fetchUserProfile')

    // realtime updates from our members collection
    fb.teamsCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
      let membersArray = []

      querySnapshot.forEach(doc => {
          let member = doc.data()
          member.id = doc.id
          membersArray.push(member)
      })

      store.commit('Member/setMembers', membersArray)
    })
  }
})

Vue.use(Vuex)

// handle page reload
fb.auth.onAuthStateChanged(user => {
  if (user) {
      store.commit('Auth/setCurrentUser', user)
      store.dispatch('Auth/fetchUserProfile')
  }
})

export default new Vuex.Store({
  
  modules: {
    Auth,
    Member,
    Professional,
    Client,
    ClientVisits,
  },
})
