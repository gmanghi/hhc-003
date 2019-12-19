<template>
    <div id="client-hids">
        <h1 class="subheading grey--text">Contracts</h1>
        <v-container>
            <ClientNavbar></ClientNavbar>
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
                    :items="contracts"
                    :search="search"
                >
                    <template v-slot:item.url="{ item }">
                        <v-btn color="red" text x-large dark :href="item.url" target="_blank">
                            <v-icon>mdi-file-pdf-outline</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-card>
            <!-- Popup Start -->
            <v-row justify="center">
                <v-dialog v-model="popup" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                        <v-btn
                            fixed
                            dark
                            fab
                            bottom
                            right
                            color="pink"
                            v-on="on">
                            <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        >
                        <v-card>
                            <v-card-title>
                                <span class="headline">Upload Contract</span>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-file-input 
                                                id="upload"
                                                accept="application/pdf"
                                                show-size label="Contract"
                                                :rules="requiredFileRules"
                                                v-model="contract"
                                            >
                                            </v-file-input>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="popup = false">Close</v-btn>
                                <v-btn color="blue darken-1" text @click="process_save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                    <v-overlay :value="overlay">
                        <v-progress-circular indeterminate size="64"></v-progress-circular>
                    </v-overlay>
                </v-dialog>
            </v-row>
            <!-- Popup End -->
        </v-container>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClientNavbar from '@/components/ClientNavbar'
export default {
    data(){
        return {
            overlay: false,
            valid: true,
            popup: false,
            search: '',
            // contracts: [],
            contract: [],
            headers: [
                { text: 'Date', align: 'center', sortable: true, value: 'createdOn' },
                { text: 'Contract URL', align: 'center', sortable: true, value: 'url' },
                { text: 'Recipient Email', align: 'center', sortable: true, value: 'recipient_email' },
                { text: 'Status', align: 'center', sortable: true, value: 'status' },
            ],
            requiredFileRules: [v => !!v || 'Contract is required', v => !v || v.size < 2000000 || 'File size should be less than 2 MB!'],
        }
    },
    components: {
        ClientNavbar
    },
    beforeRouteUpdate (to, from, next) {
        this.overlay = true
        const parent = this
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClientContracts").then(function(docs){
            // parent.contracts = docs
            parent.overlay = false
            console.log(docs)
        }).catch(function(error){
            parent.overlay = false
            console.log(error)
        })
        next();
    },
    mounted() {
        this.overlay = true
        const parent = this
        this.$store.commit('Client/setDocumentId', this.$route.params.id)
        this.$store.dispatch("Client/getClientContracts").then(function(docs){
            // parent.contracts = docs
            parent.overlay = false
            console.log(docs)
        }).catch(function(error){
            parent.overlay = false
            console.log(error)
        })
    },
    computed: {
        ...mapGetters({
            contracts: 'Client/contracts',
        }),
        currentUserProfile() {
            return this.$store.getters["Auth/getCurrentUserProfile"];
        }
    },
    methods: {
        process_save(){ 
            if (this.$refs.form.validate()) {
                this.overlay = true
                const parent = this
                this.$store.getters['Client/facesheet'](this.$route.params.id).then(function (data){
                    const contract = {
                        createdOn: new Date(),
                        recipient_title: data.client_title,
                        recipient_name: data.client_account_name,
                        recipient_address: data.client_complete_address,
                        recipient_contact_number: data.client_landline_mobile_fax,
                        recipient_email: data.client_email,
                        status: 'Pending',
                        url: parent.contract,
                        nurse_case_manager: parent.currentUserProfile.name,
                        position: parent.currentUserProfile.position,
                        contact_number: parent.currentUserProfile.contact_number,
                    }
                    parent.$store.commit('Client/setClientContract', contract)
                    parent.$store.dispatch("Client/createClientContract").then(function(doc){
                        parent.$refs.form.reset()
                        parent.popup = false
                        parent.contract = []
                        parent.overlay = false
                    }).catch(function(error){
                        console.log(error)
                    })
                }).catch(function (error){
                    console.log(error)
                })
            }
        },
    }
}
</script>