<template>
    <div id="users">
        <h1 class="subheading grey--text">Users</h1>
        <v-container>
            <v-card>
                <v-card-title>
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
}
</script>