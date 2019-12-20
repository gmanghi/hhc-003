<template>
    <div id="users">
        <h1 class="subheading white--text">Users</h1>
        <v-container>
            <v-card>
                <v-card-title>
                    <v-btn
                        color="primary"
                        text
                        to="register"
                    >
                        Add User
                        <v-icon right outlined>mdi-account-plus</v-icon>
                    </v-btn>  
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-card-search-outline"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="users"
                    :search="search"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-btn
                            color="error"
                            text
                            @click="reset(item.email)"
                            :disabled="item.status == 'Verified' ? false : true"
                        >
                            Reset Password
                            <v-icon right outlined>mdi-lock-reset</v-icon>
                        </v-btn>    
                    </template>
                </v-data-table>
            </v-card>
           
        </v-container>
    </div>
</template>

<script>
const fb = require('../firebaseInit.js')
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            search: '',
            headers: [
                { text: 'Name', align: 'center', sortable: true, value: 'name' },
                { text: 'Email', align: 'center', sortable: true, value: 'email' },
                { text: 'Position', align: 'center', sortable: true, value: 'position' },
                { text: 'Contact Number', align: 'center', sortable: true, value: 'contact_number' },
                { text: 'Status', align: 'center', sortable: true, value: 'status' },
                { text: 'Action', align: 'center', sortable: false, value: 'actions' },
            ],
        }
    },
    mounted(){
        this.$store.dispatch("Auth/fetchUsers")
    },
    computed: {
        ...mapGetters({
            users: 'Auth/getUsers',
        }),
    },
    methods: {
        reset(email) {
            fb.auth.sendPasswordResetEmail(email).then(() => {
                alert('Password reset link was sent to the email')
            }).catch(err => {
                alert(err)
            })
        }
    }
}
</script>