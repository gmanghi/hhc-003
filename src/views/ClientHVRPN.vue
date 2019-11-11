<template>
    <div id="client-hids">
        <h1 class="subheading grey--text">Home Visit Report/Progress Notes</h1>
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
                    :items="hvrpns"
                    :search="search"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-btn
                            color="blue-grey"
                            class="ma-2 white--text"
                            @click="edit_hvrpn(item.document_id)"
                        >
                            Edit
                            <v-icon right dark>mdi-pencil</v-icon>
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
                                <span class="headline">HVRPN Form</span>
                            </v-card-title>
                            <v-card-text>
                                <v-col cols="12" sm="12" md="12">
                                    <v-combobox
                                        v-model="hvrpn.hvrpn1"
                                        :items="['Patient lives alone',
                                                'Patient lives with other person(s) in the home',
                                                'Patient lives in conregate situation (e.g. assissted living)']"
                                        label="Patient Living Situation: Which of the following best describes the patient's residential circumstances and availability of assisstance?"
                                        single    
                                        chips
                                    ></v-combobox>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-combobox
                                        v-model="hvrpn.hvrpn2"
                                        :items="['Around the clock',
                                                'Regular daytime',
                                                'Regular nightime',
                                                'Occasional/Short-term assistance',
                                                'None']"
                                        label="Availability Assisstance"
                                        single    
                                        chips
                                    ></v-combobox>
                                </v-col>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="popup_close">Close</v-btn>
                                <v-btn color="blue darken-1" v-if="method === 'create'" text @click="process_save">Save</v-btn>
                                <v-btn color="blue darken-1" v-if="method === 'update'" text @click="process_update">Update</v-btn>
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
            method: 'create',
            hvrpn: {},
            headers: [
                { text: 'Date', align: 'center', sortable: true, value: 'createdOn' },
                { text: 'Edit', align: 'center', sortable: false, value: 'actions' },

            ],
            requiredFileRules: [v => !!v || 'Contract is required', v => !v || v.size < 2000000 || 'File size should be less than 2 MB!'],
        }
    },
    components: {
        ClientNavbar
    },
    beforeRouteUpdate (to, from, next) {
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClientHVRPNs");
        next();
    },
    mounted() {
        this.$store.commit('Client/setDocumentId', this.$route.params.id)
        this.$store.dispatch("Client/getClientHVRPNs");
    },
    computed: {
        ...mapGetters({
            hvrpns: 'Client/hvrpns'
        }),
    },
    methods: {
        edit_hvrpn(document_id){
            this.overlay = true
            let parent = this
            this.$store.commit('Client/setClientHVRPNDocumentId', document_id)
            this.$store.dispatch("Client/getClientHVRPN").then(function(doc){
                console.log(doc)
                parent.hvrpn = doc
                parent.popup = true
                parent.method = 'update'
                parent.overlay = false
                parent.tab = 0
            }).catch(function(error){
                console.log(error)
            })
        },
        process_save(){ 
            if (this.$refs.form.validate()) {
                this.overlay = true
                this.hvrpn.createdOn = new Date
                const data = this.hvrpn
                const parent = this
                this.$store.commit('Client/setClientHVRPN', data)
                this.$store.dispatch("Client/createClientHVRPN").then(function(doc){
                    console.log('saveClientHVRPN',doc)
                    parent.popup = false
                    parent.hvrpn = {}
                    parent.overlay = false
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
        process_update(){
            if (this.$refs.form.validate()) {
                this.overlay = true
                const parent = this
                const data = this.hvrpn
                this.$store.commit('Client/setClientHVRPN', data)
                this.$store.commit('Client/setClientHVRPNDocumentId', this.hvrpn.document_id)
                this.$store.dispatch("Client/updateClientHVRPN").then(function(doc){
                    console.log('Document Updated!',doc)
                    parent.popup = false
                    parent.overlay = false
                    parent.tab = 0
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
        popup_close(){
            this.$refs.form.reset()
            this.popup = false
            this.method = 'create'
            this.tab = 0
        }
    }
}
</script>