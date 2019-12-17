<template>
    <div id="client-details">
        <h1 class="subheading grey--text">Profile</h1>
        <v-container>
            <v-card>      
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="12" sm="12">
                            <v-text-field label="Name" v-model="name"></v-text-field>
                        </v-col>
                        <v-col cols="12"  md="12" sm="12">
                            <v-text-field label="Username" v-model="currentUserEmail" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                            <v-text-field label="Position" v-model="position"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                            <v-text-field label="Contact Number" v-model="contact_number"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="update">Update</v-btn>
                    </v-card-actions>
            </v-card>
            
        </v-container>
    </div>
</template>

<script>
const fb = require('../firebaseInit.js')

export default {
    data(){
        return {
            name: '',
            position: '',
            contact_number: '',
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
        currentUserProfile() { 
            // alert(this.currentUserId)
            // fb.usersCollection.doc(this.currentUserId).get().then(res => {
            //     return res.data()
            // }).catch(err => {
            //     console.log(err)
            // })
            return this.$store.getters["Auth/getCurrentUserProfile"];
        }
    },
    mounted() {
        this.name = this.currentUserProfile.name
        this.position = this.currentUserProfile.position
        this.contact_number = this.currentUserProfile.contact_number
    },
    methods: {
        update(){
            fb.usersCollection.doc(this.currentUserId).set({
                name: this.name,
                position: this.position,
                contact_number: this.contact_number,
            }).then(() => {
                alert('Profile Updated')
                this.$store.dispatch('Auth/fetchUserProfile')
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>