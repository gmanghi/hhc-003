const Members = {
    namespaced: true,
    state: { 
        members: []
    },
    mutations: { 
        setMembers(state, val){
            state.members = val
        },
    },
    actions: { 
        
    },
    getters: { 
        getMembers: (state, getters) => {
            // realtime updates from our members collection
            fb.teamsCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
                let membersArray = []
        
                querySnapshot.forEach(doc => {
                    let member = doc.data()
                    member.id = doc.id
                    membersArray.push(member)
                })
        
                store.commit('setMembers', membersArray)
            })
        }
    }
}

export default Members