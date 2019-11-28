<template>
    <div id="clients">
        <h1 class="subheading grey--text">Clients/Patients</h1>

        <v-container class="my-5">
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
                    :items="clients"
                    :search="search"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-btn
                            color="blue-grey"
                            class="black--text"
                            text
                            :to="{ name: 'client_details', params: { id: item.document_id } }"
                            >
                            <v-icon dark>mdi-clipboard-list-outline</v-icon>
                        </v-btn>    
                    </template>
                </v-data-table>
            </v-card>
            <ClientAddEditForm v-bind:popup="popup" v-bind:client="client" v-bind:method="method" v-bind:document_id="document_id"></ClientAddEditForm>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import ClientAddEditForm from '../components/ClientAddEditForm'
export default {
    components: { ClientAddEditForm },
    data() {
        return {
            // valid: true,
            // date_popup: false,
            popup: false,
            // overlay: false,
            // snackbar: false,
            // notification: '',
            // client: {},
            method: 'create',
            document_id: '',
            search: '',
            headers: [
                { text: 'Client/Account Name', align: 'center', sortable: true, value: 'client_account_name' },
                { text: 'Patient Name', align: 'center', sortable: true, value: 'patient_name' },
                { text: 'Email', align: 'center', value: 'client_email' },
                { text: 'Landline/Mobile/Fax', align: 'center', value: 'client_landline_mobile_fax' },
                { text: 'Status', align: 'center', value: 'client_status' },
                { text: 'Actions', align: 'center', value: 'actions' },
            ],
            client: {}
        }
    },
    beforeRouteUpdate (to, from, next) {
        this.$store.dispatch("Client/getClients")
        next();
    },
    mounted() {
        this.$store.dispatch("Client/getClients");
    },
    computed: {
        ...mapGetters({
            clients: 'Client/clients'
        }),
        // computedDateFormattedMomentjs(){
        //     return this.client.patient_birthdate ? moment(this.client.patient_birthdate).format('YYYY-MM-DD') : ''
        // },
    },
    methods: {
        popupOpen(){
            this.popup = true
        },
        popupClose(){
            this.popup = false
        }
    //     viewClient(document_id){
    //         this.$store.commit('Client/setDocumentId', document_id)
    //         this.$store.dispatch("Client/getClient")
    //         this.professional = this.$store.getters['Client/client']
    //     },
    //     editClient(document_id){
    //         this.$store.commit('Client/setDocumentId', document_id)
    //         this.$store.dispatch("Client/getClient")
    //         this.professional = this.$store.getters['Professional/client']
    //         this.popup = true
    //         this.method = 'update'
    //         console.log(this.professional)
    //     },
    //     deleteClient(document_id){
    //         this.$store.commit('Client/setDocumentId', document_id)
    //         this.$store.dispatch("Client/deleteClient")
    //     },
    //     saveClient(){
    //         this.overlay = true
    //         const parent = this
    //         this.client.createdOn = new Date
    //         this.$store.commit('Client/setClient', this.client)
    //         this.$store.dispatch("Client/createClient").then(function(doc){
    //             console.log('saveClient',doc)
    //             parent.popupClose()
    //             // parent.popup = false
    //             // parent.overlay = false
    //         }).catch(function(error){
    //             parent.notification = error
    //             parent.snackbar = true
    //             console.log(error)
    //         })
            
    //     },
    //     updateClient(data){
    //         this.overlay = true
    //         const parent = this
    //         this.$store.commit('Client/setClient', data)
    //         this.$store.dispatch("Client/updateClient").then(function(doc){
    //             console.log('updateClient',doc)
    //             parent.popupClose()
    //             // parent.popup = false
    //             // parent.method = 'create'
    //             // parent.overlay = false
    //         }).catch(function(error){
    //             parent.notification = error
    //             parent.snackbar = true
    //             console.log(error)
    //         })
    //     },
    //     popupClose(){
    //         this.method = 'create'
    //         this.popup = false
    //         this.overlay = false
    //     },
    //     popupCreateClient(){
    //         this.$store.dispatch("Client/clearClient")
    //         this.professional = this.$store.getters['Client/client']
    //         this.method = 'create'
    //         this.popup = true
    //     },
    }
}
</script>
