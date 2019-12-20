<template>
    <nav>
        <v-app-bar app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer" v-if="!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text" color="primary">
                <span>Home Health Care</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="grey" @click="logout">
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer 
            v-model="drawer" 
            app
            dark
            floating
            persistent
            mobile-break-point="991"
            width="260"
            src="https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"
            >
            
                <v-list-item>
                    <v-list-item-avatar>
                        <v-avatar color="teal" size="36">
                            <span class="white--text headline">{{ currentUserDisplayName.charAt(0).toUpperCase() }}</span>
                        </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>
                            {{ currentUserDisplayName }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list dense>
                    <v-list-item
                        v-for="item in configurations"
                        :key="item.title"
                        link
                        route :to="item.route">
                        <v-list-item-icon>
                            <v-icon size="36">{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list dense>
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                        route :to="item.route">
                        <v-list-item-icon>
                            <v-avatar color="orange" size="36">
                            <span class="white--text">{{ item.acronym }}</span>
                        </v-avatar>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="orange--text subtitle-1">{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            
        </v-navigation-drawer>
    </nav>
</template>
<script>
import { mapState } from 'vuex'
const fb = require('../firebaseInit.js')

export default {
    data() {
        return {
            drawer: true,
            items: [
                // { title: 'Home', icon: 'mdi-home', route:'/' },
                { title: 'Clients/Patients', icon: 'mdi-mother-nurse', route:'/clients', acronym: 'C/P' },
                { title: 'Caregivers', icon: 'mdi-mother-nurse', route:'/professionals/caregiver', acronym: 'CG' },
                // { title: 'Applicants', icon: 'mdi-mother-nurse', route:'/professionals/applicants' },
                { title: 'Physicians', icon: 'mdi-mother-nurse', route:'/professionals/physician', acronym: 'MD' },
                { title: 'Physical Therapists', icon: 'mdi-mother-nurse', route:'/professionals/physical-therapist', acronym: 'PT' },
                { title: 'Nurses', icon: 'mdi-mother-nurse', route:'/professionals/nurse', acronym: 'RN' },
                { title: 'Nutritionist', icon: 'mdi-mother-nurse', route:'/professionals/nutritionist', acronym: 'N' },
                //{ title: 'Projects', icon: 'mdi-mother-nurse', route:'/projects' },
                //{ title: 'Teams', icon: 'mdi-mother-nurse', route:'/teams' },
            ],
            configurations: [
                
                { title: 'Profile', icon: 'mdi-face-profile', route:'/profile' },
                // { title: 'Register', icon: 'mdi-account-plus', route:'/register' },
                { title: 'Users', icon: 'mdi-account-group', route:'/users' },
                //{ title: 'Projects', icon: 'mdi-mother-nurse', route:'/projects' },
                //{ title: 'Teams', icon: 'mdi-mother-nurse', route:'/teams' },
            ],
        }
    },
    props: [
        'currentUserEmail', 'currentUserDisplayName'
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