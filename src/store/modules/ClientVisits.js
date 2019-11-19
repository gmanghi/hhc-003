import moment from 'moment'
const fb = require('../../firebaseConfig.js')
const CLientVisits = {
    namespaced: true,
    state: { 
        visits: [],
        visit: {}
    },
    mutations: { 
        setVisits(state, val){
            state.visits = val
        },
        setVisit(state, val){
            state.visit = val
        }
    },
    actions: { 
        clearVisit({commit}){
            commit('setVisit', {})
        },
        getVisits({commit, state}) {
            return new Promise((resolve, reject) => {
                fb.visitCollection.onSnapshot(querySnapshot => {
                    let container = []
                    querySnapshot.forEach(doc => {
                        let data = doc.data()
                        data.id = doc.id
                        data.name = data.professional
                        // data.details = 'data.professional'
                        data.color = 'green'
                        data.start = moment(data.time_start.toDate()).format('YYYY-MM-DD hh:mm')
                        data.end = moment(data.time_end.toDate()).format('YYYY-MM-DD hh:mm')
                        container.push(data)
                    })
                    commit('setVisits', container)
                    resolve(state.visits)
                }, error => {
                    reject(error)
                })
            })
        },
        createVisit({commit, state}) {
            return new Promise((resolve, reject) => {
                fb.visitCollection.add(state.visit).then(doc => {
                    this.dispatch("ClientVisits/clearVisit")
                    resolve(doc)
                }).catch(error => {
                    this.dispatch("ClientVisits/clearVisit")
                    reject(error)
                })
            })
        }
    },
    getters: { 
        visits: (state, getters) => {
            return state.visits
        },
        visit: (state, getters) => {
            return state.visit
        }, 
    }
}

export default CLientVisits