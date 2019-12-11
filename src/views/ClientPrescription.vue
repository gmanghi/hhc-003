<template>
    <div id="client-hids">
        <h1 class="subheading grey--text">Prescription</h1>
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
                    :items="prescriptions"
                    :search="search"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-btn
                            color="blue-grey"
                            class="ma-2 white--text"
                            @click="edit_prescription(item.document_id)"
                        >
                            Edit
                            <v-icon right dark>mdi-pencil</v-icon>
                        </v-btn>    
                    </template>
                </v-data-table>
            </v-card>
            <!-- Popup Start -->
            <v-row justify="center">
                <v-dialog v-model="popup" scrollable max-width="60%">
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
                                <span class="headline">Prescription Form</span>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="12" md="12">
                                         <v-text-field label="Patient Name" v-model="prescription.prescription_patient_name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                         <v-text-field label="Address" v-model="prescription.prescription_address"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4">
                                         <v-text-field label="Phone" v-model="prescription.prescription_phone"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4">
                                         <v-text-field label="Age" v-model="prescription.prescription_age"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4">
                                         <v-text-field label="Sex" v-model="prescription.prescription_sex"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="6">
                                        <v-menu
                                            :close-on-content-click="true"
                                            max-width="290"
                                            readonly
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    :value="prescription.date"
                                                    clearable
                                                    label="Date"
                                                    readonly
                                                    v-on="on">
                                                </v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="prescription.date"
                                                @change="date_popup = false"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-textarea label="Prescriptions" auto-grow outlined v-model="prescription.prescriptions"></v-textarea>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6">
                                         <v-text-field label="MD" v-model="prescription.prescription_md"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6">
                                         <v-text-field label="License No." v-model="prescription.prescription_license"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6">
                                         <v-text-field label="PTR" v-model="prescription.prescription_ptr"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6">
                                         <v-text-field label="S2" v-model="prescription.prescription_s2"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-divider></v-divider>
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
            method: 'create',
            search: '',
            // prescriptions: [],
            prescription: {},
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
        this.overlay = true
        const parent = this
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClientPrescriptions").then(function(docs){
            // parent.prescriptions = docs
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
        this.$store.dispatch("Client/getClientPrescriptions").then(function(docs){
            // parent.prescriptions = docs
            parent.overlay = false
            console.log(docs)
        }).catch(function(error){
            parent.overlay = false
            console.log(error)
        })
    },
    computed: {
        ...mapGetters({
            prescriptions: 'Client/prescriptions'
        }),
    },
    methods: {
        edit_prescription(document_id){
            this.overlay = true
            let parent = this
            this.$store.commit('Client/setClientPrescriptionDocumentId', document_id)
            this.$store.dispatch("Client/getClientPrescription").then(function(doc){
                console.log(doc)
                parent.prescription = doc
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
                this.prescription.createdOn = new Date
                const data = this.prescription
                const parent = this
                this.$store.commit('Client/setClientPrescription', data)
                this.$store.dispatch("Client/createClientPrescription").then(function(doc){
                    console.log('saveClientPrescription',doc)
                    parent.popup = false
                    parent.prescription = {}
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
                const data = this.prescription
                this.$store.commit('Client/setClientPrescription', data)
                this.$store.commit('Client/setClientPrescriptionDocumentId', this.prescription.document_id)
                this.$store.dispatch("Client/updateClientPrescription").then(function(doc){
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