<template>
    <div id="client-details">
        <h1 class="subheading grey--text">Profile</h1>
        <v-container>
            <v-card>      
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="12" sm="12">
                            <v-text-field label="Name" v-model="currentUserProfile.name"></v-text-field>
                        </v-col>
                        <v-col cols="12"  md="12" sm="12">
                            <v-text-field label="Username" v-model="currentUserProfile.email" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                            <v-text-field label="Position" v-model="currentUserProfile.position"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                            <v-text-field label="Contact Number" v-model="currentUserProfile.contact_number"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="update">Update</v-btn>
                    </v-card-actions>
            </v-card>
            <v-overlay :value="overlay" z-index="202">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
            <v-snackbar
                v-model="snackbar"
                :multi-line="true">
                {{ notification }}
                <v-btn
                    color="blue"
                    text
                    @click="snackbar = false">
                    Close
                </v-btn>
            </v-snackbar>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
const fb = require('../firebaseInit.js')

export default {
    data(){
        return {
            overlay: false,
            snackbar: false,
            notification: ''
        }
    },
    computed: {
        currentUserEmail() { 
            this.$store.dispatch('Auth/fetchUserProfile');
            return this.$store.getters["Auth/getCurrentUserEmail"];
        },
        currentUserId() {
            return this.$store.getters["Auth/getCurrentUserId"];
        },
        ...mapGetters({
            currentUserProfile: 'Auth/getCurrentUserProfile',
        }),
        // currentUserProfile() { 
        //     // alert(this.currentUserId)
        //     // fb.usersCollection.doc(this.currentUserId).get().then(res => {
        //     //     return res.data()
        //     // }).catch(err => {
        //     //     console.log(err)
        //     // })
        //     const profile = this.$store.getters["Auth/getCurrentUserProfile"];
        //     this.name = profile.name
        //     this.position = profile.position
        //     this.contact_number = profile.contact_number
        //     return this.$store.getters["Auth/getCurrentUserProfile"];
        // }
    },
    mounted() {
        // this.currentUserProfile()
        // this.name = this.currentUserProfile.name
        // this.position = this.currentUserProfile.position
        // this.contact_number = this.currentUserProfile.contact_number
    },
    methods: {
        update(){
            this.overlay = true
            const parent = this
            fb.usersCollection.doc(this.currentUserId).update({
                name: this.currentUserProfile.name,
                position: this.currentUserProfile.position,
                contact_number: this.currentUserProfile.contact_number,
            }).then(() => {
                this.$store.dispatch('Auth/fetchUserProfile')
                parent.overlay = false
                parent.snackbar = true
                parent.notification = 'Successfully Updated!'
            }).catch(error => {
                parent.overlay = false
                parent.snackbar = true
                parent.notification = error
            })
        }
    }
}
</script>