<template>
    <div id="client-hids">
        <h1 class="subheading grey--text">Patient Medication Profile</h1>
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
                    :items="patient_medication_profiles"
                    :search="search"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-btn
                            color="blue-grey"
                            class="ma-2 white--text"
                            @click="edit_pmp(item.document_id)"
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
                                <span class="headline">Patient Medication Program Form</span>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Name" v-model="patient_medication_profile.patient_medication_profile_name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Case #" v-model="patient_medication_profile.patient_medication_profile_case"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Diagnosis" v-model="patient_medication_profile.patient_medication_profile_diagnosis"></v-text-field>
                                    </v-col>
                                <v-col cols="12" md="6" sm="12">
                                        <v-menu
                                            :close-on-content-click="true"
                                            max-width="290"
                                            readonly
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    :value="computedDateFormattedMomentjs"
                                                    clearable
                                                    label="Birth date"
                                                    readonly
                                                    v-on="on">
                                                </v-text-field>
                                            </template>
                                            <v-date-picker
                                                @change="date_popup = false"
                                                readonly
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Primary Physician" v-model="patient_medication_profile.patient_medication_profile_primaryPhysician"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Telephone Number" v-model="patient_medication_profile.patient_medication_profile_telephone"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-text-field label="Allergies" v-model="patient_medication_profile.patient_medication_profile_allergies"></v-text-field>
                                    </v-col>
                                    <v-col cols="12"><v-divider></v-divider></v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-menu
                                            :close-on-content-click="true"
                                            max-width="290"
                                            readonly
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    :value="computedDateFormattedMomentjs"
                                                    clearable
                                                    label="Date"
                                                    readonly
                                                    v-on="on">
                                                </v-text-field>
                                            </template>
                                            <v-date-picker
                                                @change="date_popup = false"
                                                readonly
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-combobox
                                            v-model="patient_medication_profile.patient_medication_profile_prescribed_medication"
                                            :items="['Routine','PRN','OTC Drugs']"
                                            label="Prescribed Medication"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Dose" v-model="patient_medication_profile.patient_medication_profile_dose"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Route" v-model="patient_medication_profile.patient_medication_profile_route"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Frequency" v-model="patient_medication_profile.patient_medication_profile_freq"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="N/C/O" v-model="patient_medication_profile.patient_medication_profile_nco"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-menu
                                            :close-on-content-click="true"
                                            max-width="290"
                                            readonly
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    :value="computedDateFormattedMomentjs"
                                                    clearable
                                                    label="D/C Date"
                                                    readonly
                                                    v-on="on">
                                                </v-text-field>
                                            </template>
                                            <v-date-picker
                                                @change="date_popup = false"
                                                readonly
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Drug Classification" v-model="patient_medication_profile.patient_medication_profile_drug_classification"></v-text-field>
                                    </v-col>
                                    <v-col cols="12"><v-divider></v-divider></v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Signature over printed name" v-model="patient_medication_profile.patient_medication_profile_sign_name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-menu
                                            :close-on-content-click="true"
                                            max-width="290"
                                            readonly
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    :value="computedDateFormattedMomentjs"
                                                    clearable
                                                    label="Date"
                                                    readonly
                                                    v-on="on">
                                                </v-text-field>
                                            </template>
                                            <v-date-picker
                                                @change="date_popup = false"
                                                readonly
                                            ></v-date-picker>
                                        </v-menu>
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
            search: '',
            method: 'create',
            patient_medication_profile: {},
            headers: [
                { text: 'Date', align: 'center', sortable: true, value: 'createdOn' },
                { text: 'Edit', align: 'center', sortable: false, value: 'actions' },

            ],
            // requiredFileRules: [v => !!v || 'Contract is required', v => !v || v.size < 2000000 || 'File size should be less than 2 MB!'],
        }
    },
    components: {
        ClientNavbar
    },
    beforeRouteUpdate (to, from, next) {
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClientPatientMedicationProfiles");
        next();
    },
    mounted() {
        this.$store.commit('Client/setDocumentId', this.$route.params.id)
        this.$store.dispatch("Client/getClientPatientMedicationProfiles");
    },
    computed: {
        ...mapGetters({
            patient_medication_profiles: 'Client/patient_medication_profiles'
        }),
    },
    methods: {
        edit_pmp(document_id){
            this.overlay = true
            let parent = this
            this.$store.commit('Client/setClientPatientMedicationProfileDocumentId', document_id)
            this.$store.dispatch("Client/getClientPatientMedicationProfile").then(function(doc){
                console.log(doc)
                parent.patient_medication_profile = doc
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
                this.patient_medication_profile.createdOn = new Date
                const data = this.patient_medication_profile
                const parent = this
                this.$store.commit('Client/setClientPatientMedicationProfile', data)
                this.$store.dispatch("Client/createClientPatientMedicationProfile").then(function(doc){
                    console.log('saveClientPatientMedicationProfile',doc)
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
                const data = this.patient_medication_profile
                this.$store.commit('Client/setClientPatientMedicationProfile', data)
                this.$store.commit('Client/setClientPatientMedicationProfileDocumentId', this.patient_medication_profile.document_id)
                this.$store.dispatch("Client/updateClientPatientMedicationProfile").then(function(doc){
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