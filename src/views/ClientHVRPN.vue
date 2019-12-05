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
                <v-dialog v-model="popup" scrollable max-width="90%">
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
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" md="2" sm="3" xs="2">
                                        <v-autocomplete
                                        :items="['Mr.', 'Ms.', 'Mrs.', 'Dr.']"
                                        label="Title"
                                        v-model="hvrpn.hvrpn_title"
                                        ></v-autocomplete>
                                    </v-col><v-col cols="12" md="4" sm="3" >
                                        <v-text-field label="Client / Account Name*" v-model="hvrpn.hvrpn_account_name" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12"  md="3" sm="3">
                                        <v-text-field label="Relationship to Patient" v-model="hvrpn.hvrpn_relationship"></v-text-field>
                                    </v-col>
                                    <v-col cols="12"  md="3" sm="3">
                                        <v-text-field label="Date/Time" v-model="hvrpn.hvrpn_datetime"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4" sm="4">
                                        <v-text-field
                                        label="Landline / Mobile Phone / Fax*"
                                        persistent-hint
                                        required
                                        v-model="hvrpn.hvrpn_landline_mobile_fax"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Email Address*" v-model="hvrpn.hvrpn_email" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Attending Physician*" v-model="hvrpn.hvrpn_attending_physician" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="2"  sm="3" xs="2">
                                        <v-autocomplete
                                        :items="['Mr.', 'Ms.', 'Mrs.', 'Dr.']"
                                        label="Title"
                                        v-model="hvrpn.patient_title"
                                        ></v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" md="5" sm="3">
                                        <v-text-field label="Patient Name*" v-model="hvrpn.hvrpn_patient_name" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="2" sm="3">
                                        <v-text-field label="Age" v-model="hvrpn.hvrpn_patient_age" hint="example of helper text only on focus" required></v-text-field>
                                    </v-col>
                                        <v-col cols="12" md="3" sm="3">
                                        <v-menu
                                            v-model="date_popup"
                                            :close-on-content-click="true"
                                            max-width="290"
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    :value="hvrpn.hvrpn_patient_birthdate"
                                                    clearable
                                                    label="Birthdate*"
                                                    readonly
                                                    v-on="on">
                                                </v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="hvrpn.hvrpn_patient_birthdate"
                                                @change="date_popup = false"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Religion" v-model="hvrpn.hvrpn_patient_religion" hint="example of helper text only on focus" required></v-text-field>
                                    </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Nationality*" v-model="hvrpn.hvrpn_patient_nationality" hint="example of helper text only on focus" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Landline" v-model="hvrpn.hvrpn_patient_landline" hint="example of helper text only on focus" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-text-field label="Complete Address*" v-model="hvrpn.hvrpn_patient_complete_address" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-textarea label="Chief Complaint*" auto-grow outlined v-model="hvrpn.hvrpn_patient_chief_complaint" required></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-textarea label="Physical Examination" auto-grow outlined v-model="hvrpn.hvrpn_physical_examination" required></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-textarea label="New Problems" auto-grow outlined v-model="hvrpn.hvrpn_new_problems" required></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-textarea label="Old Stable Problems" auto-grow outlined v-model="hvrpn.hvrpn_old_problems" required></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-textarea label="Plan of Care" auto-grow outlined v-model="hvrpn.hvrpn_plan_of_care" required></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="6">
                                        <v-text-field label="CASE MANAGER" v-model="hvrpn.hvrpn_case_manager" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="6">
                                        <v-text-field label="ACCOMPLISHED BY" v-model="hvrpn.hvrpn_accomplished_by" required></v-text-field>
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
            date_popup: false,
            overlay: false,
            valid: true,
            popup: false,
            search: '',
            method: 'create',
            hvrpns: [],
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
        this.overlay = true
        const parent = this
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClientHVRPNs").then(function(docs){
            parent.hvrpns = docs
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
        this.$store.dispatch("Client/getClientHVRPNs").then(function(docs){
            parent.hvrpns = docs
            parent.overlay = false
            console.log(docs)
        }).catch(function(error){
            parent.overlay = false
            console.log(error)
        })
    },
    computed: {
        // ...mapGetters({
        //     hvrpns: 'Client/hvrpns'
        // }),
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