<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span>HHC</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="grey" @click="logout">
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer absolute temporary v-model="drawer">
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{ currentUserEmail }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

             <v-divider></v-divider>

            <v-list dense>

                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    route :to="item.route">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
    </nav>
</template>
<script>
import { mapState } from 'vuex'
const fb = require('../firebaseConfig.js')

export default {
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Home', icon: 'mdi-home', route:'/' },
                { title: 'Clients/Patients', icon: 'mdi-mother-nurse', route:'/clients' },
                { title: 'Caregivers', icon: 'mdi-mother-nurse', route:'/professionals/caregiver' },
                // { title: 'Applicants', icon: 'mdi-mother-nurse', route:'/professionals/applicants' },
                { title: 'Physicians', icon: 'mdi-mother-nurse', route:'/professionals/physician' },
                { title: 'Physical Therapists', icon: 'mdi-mother-nurse', route:'/professionals/physical-therapist' },
                { title: 'Nurses', icon: 'mdi-mother-nurse', route:'/professionals/nurse' },
                { title: 'Nutritionist', icon: 'mdi-mother-nurse', route:'/professionals/nutritionist' },
                //{ title: 'Projects', icon: 'mdi-mother-nurse', route:'/projects' },
                //{ title: 'Teams', icon: 'mdi-mother-nurse', route:'/teams' },
            ],
        }
    },
    props: [
        'currentUserEmail'
    ],
    // computed: {
    //     ...mapState([ 'Auth/currentUser' ])
    // },
    methods: {
        logout() {
            fb.auth.signOut().then(() => {
                this.$store.dispatch('Auth/clearData')
                this.$router.push('/login')
            }).catch(err => {
                console.log(err)
            })
        }
    }

}
</script>