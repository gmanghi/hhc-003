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
                                            v-model="patient_medication_profile_date1"
                                            :close-on-content-click="false"
                                            max-width="290"
                                            readonly
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    :value="patient_medication_profile.date1"
                                                    clearable
                                                    label="Birth date"
                                                    readonly
                                                    v-on="on">
                                                </v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="patient_medication_profile.date1"
                                                @change="patient_medication_profile_date1 = false"
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
                                    <v-col cols="12 subtitle-1 font-weight-bold">Prescribed Routine Medication</v-col>
                                    
                                    <v-col cols="12" v-for="(routine, index) in routines" v-bind:key="routine.id">
                                        <v-card color="#385F73" dark>
                                            <div class="text-right"><v-btn fab x-small class="ma-2" color="error" v-if="index > 0" @click="remove_routine_from_array(index)"><v-icon dark>mdi-minus</v-icon></v-btn></div>
                                            <v-col cols="12" md="12" sm="12">
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="12">
                                                        <v-text-field label="Prescribed Routine Medication" v-model="routines[index].prescribed_routine_medication"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="12">
                                                        <v-text-field label="Drug Classification" v-model="routines[index].drug_classification"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-menu
                                                            v-model="routines[index].date_popup"
                                                            :close-on-content-click="true"
                                                            max-width="290"
                                                            readonly
                                                            >
                                                            <template v-slot:activator="{ on }">
                                                                <v-text-field
                                                                    :value="routines[index].date"
                                                                    clearable
                                                                    label="Date"
                                                                    readonly
                                                                    v-on="on">
                                                                </v-text-field>
                                                            </template>
                                                            <v-date-picker
                                                                v-model="routines[index].date"
                                                                @change="routines[index].date_popup = false"
                                                            ></v-date-picker>
                                                        </v-menu>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="Dose" v-model="routines[index].dose"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="Route" v-model="routines[index].route"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="Frequency" v-model="routines[index].freq"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="N/C/O" v-model="routines[index].n_c_o"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-menu
                                                            v-model="routines[index].d_c_date_popup"
                                                            :close-on-content-click="false"
                                                            max-width="290"
                                                            readonly
                                                            >
                                                            <template v-slot:activator="{ on }">
                                                                <v-text-field
                                                                    :value="routines[index].d_c_date"
                                                                    clearable
                                                                    label="D/C Date"
                                                                    readonly
                                                                    v-on="on">
                                                                </v-text-field>
                                                            </template>
                                                            <v-date-picker
                                                                v-model="routines[index].d_c_date"
                                                                @change="routines[index].d_c_date_popup = false"
                                                            ></v-date-picker>
                                                        </v-menu>
                                                    </v-col>
                                                    <!-- <v-col cols="12" md="4" sm="12">
                                                        <v-text-field label="Drug Classification" v-model="routines[index].drug_classification"></v-text-field>
                                                    </v-col> -->
                                                </v-row>
                                            </v-col>
                                            <!-- <PatientMedicationProfileRoutines v-bind:patient_medication_profile="patient_medication_profile" v-bind:index="index"></PatientMedicationProfileRoutines> -->
                                        </v-card>
                                    </v-col>
                                     <v-col cols="12">
                                         <div class="text-right">
                                            <v-btn class="mx-2" fab dark color="indigo" @click="append_routine_to_array"><v-icon dark>mdi-plus</v-icon></v-btn>
                                         </div>
                                    </v-col>
                                   
                                    <v-col cols="12"><v-divider></v-divider></v-col>
                                    <v-col cols="12 subtitle-1 font-weight-bold">Prescribed PRN Medication</v-col>

                                    <v-col cols="12" v-for="(prn, index) in prns" v-bind:key="prn.id">
                                        <v-card color="#385F73" dark>
                                            <div class="text-right"><v-btn fab x-small class="ma-2" color="error" v-if="index > 0" @click="remove_prn_from_array(index)"><v-icon dark>mdi-minus</v-icon></v-btn></div>
                                            <v-col cols="12" md="12" sm="12">
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="12">
                                                        <v-text-field label="Prescribed Routine Medication" v-model="prns[index].prescribed_prn_medication"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="12">
                                                        <v-text-field label="Drug Classification" v-model="prns[index].drug_classification"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-menu
                                                            v-model="prns[index].date_popup"
                                                            :close-on-content-click="true"
                                                            max-width="290"
                                                            readonly
                                                            >
                                                            <template v-slot:activator="{ on }">
                                                                <v-text-field
                                                                    :value="prns[index].date"
                                                                    clearable
                                                                    label="Date"
                                                                    readonly
                                                                    v-on="on">
                                                                </v-text-field>
                                                            </template>
                                                            <v-date-picker
                                                                v-model="prns[index].date"
                                                                @change="prns[index].date_popup = false"
                                                            ></v-date-picker>
                                                        </v-menu>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="Dose" v-model="prns[index].dose"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="Route" v-model="prns[index].route"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="Frequency" v-model="prns[index].freq"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="N/C/O" v-model="prns[index].n_c_o"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-menu
                                                            v-model="prns[index].d_c_date_popup"
                                                            :close-on-content-click="false"
                                                            max-width="290"
                                                            readonly
                                                            >
                                                            <template v-slot:activator="{ on }">
                                                                <v-text-field
                                                                    :value="prns[index].d_c_date"
                                                                    clearable
                                                                    label="D/C Date"
                                                                    readonly
                                                                    v-on="on">
                                                                </v-text-field>
                                                            </template>
                                                            <v-date-picker
                                                                v-model="prns[index].d_c_date"
                                                                @change="prns[index].d_c_date_popup = false"
                                                            ></v-date-picker>
                                                        </v-menu>
                                                    </v-col>
                                                    <!-- <v-col cols="12" md="4" sm="12">
                                                        <v-text-field label="Drug Classification" v-model="prns[index].drug_classification"></v-text-field>
                                                    </v-col> -->
                                                </v-row>
                                            </v-col>
                                            <!-- <PatientMedicationProfileRoutines v-bind:patient_medication_profile="patient_medication_profile" v-bind:index="index"></PatientMedicationProfileRoutines> -->
                                        </v-card>
                                    </v-col>
                                     <v-col cols="12">
                                         <div class="text-right">
                                            <v-btn class="mx-2" fab dark color="indigo" @click="append_prn_to_array"><v-icon dark>mdi-plus</v-icon></v-btn>
                                         </div>
                                    </v-col>
                                   
                                    <v-col cols="12"><v-divider></v-divider></v-col>
                                    <v-col cols="12 subtitle-1 font-weight-bold">OTC Drugs</v-col>

                                    <v-col cols="12" v-for="(otc_drug, index) in otc_drugs" v-bind:key="otc_drug.id">
                                        <v-card color="#385F73" dark>
                                            <div class="text-right"><v-btn fab x-small class="ma-2" color="error" v-if="index > 0" @click="remove_otc_drug_from_array(index)"><v-icon dark>mdi-minus</v-icon></v-btn></div>
                                            <v-col cols="12" md="12" sm="12">
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="12">
                                                        <v-text-field label="OTC Drugs" v-model="otc_drugs[index].otc_drugs"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="12">
                                                        <v-text-field label="Drug Classification" v-model="otc_drugs[index].drug_classification"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-menu
                                                            v-model="otc_drugs[index].date_popup"
                                                            :close-on-content-click="true"
                                                            max-width="290"
                                                            readonly
                                                            >
                                                            <template v-slot:activator="{ on }">
                                                                <v-text-field
                                                                    :value="otc_drugs[index].date"
                                                                    clearable
                                                                    label="Date"
                                                                    readonly
                                                                    v-on="on">
                                                                </v-text-field>
                                                            </template>
                                                            <v-date-picker
                                                                v-model="otc_drugs[index].date"
                                                                @change="otc_drugs[index].date_popup = false"
                                                            ></v-date-picker>
                                                        </v-menu>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="Dose" v-model="otc_drugs[index].dose"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="Route" v-model="otc_drugs[index].route"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="Frequency" v-model="otc_drugs[index].freq"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-text-field label="N/C/O" v-model="otc_drugs[index].n_c_o"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="2" sm="12">
                                                        <v-menu
                                                            v-model="otc_drugs[index].d_c_date_popup"
                                                            :close-on-content-click="false"
                                                            max-width="290"
                                                            readonly
                                                            >
                                                            <template v-slot:activator="{ on }">
                                                                <v-text-field
                                                                    :value="otc_drugs[index].d_c_date"
                                                                    clearable
                                                                    label="D/C Date"
                                                                    readonly
                                                                    v-on="on">
                                                                </v-text-field>
                                                            </template>
                                                            <v-date-picker
                                                                v-model="otc_drugs[index].d_c_date"
                                                                @change="otc_drugs[index].d_c_date_popup = false"
                                                            ></v-date-picker>
                                                        </v-menu>
                                                    </v-col>
                                                    <!-- <v-col cols="12" md="4" sm="12">
                                                        <v-text-field label="Drug Classification" v-model="otc_drugs[index].drug_classification"></v-text-field>
                                                    </v-col> -->
                                                </v-row>
                                            </v-col>
                                            <!-- <PatientMedicationProfileRoutines v-bind:patient_medication_profile="patient_medication_profile" v-bind:index="index"></PatientMedicationProfileRoutines> -->
                                        </v-card>
                                    </v-col>
                                     <v-col cols="12">
                                         <div class="text-right">
                                            <v-btn class="mx-2" fab dark color="indigo" @click="append_otc_drug_to_array"><v-icon dark>mdi-plus</v-icon></v-btn>
                                         </div>
                                    </v-col>
                                   
                                    <v-col cols="12"><v-divider></v-divider></v-col>

                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Signature over printed name" v-model="patient_medication_profile.patient_medication_profile_sign_name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-menu
                                            v-model="patient_medication_profile_date2"
                                            :close-on-content-click="false"
                                            max-width="290"
                                            readonly
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    :value="patient_medication_profile.date4"
                                                    clearable
                                                    label="Date"
                                                    readonly
                                                    v-on="on">
                                                </v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="patient_medication_profile.date4"
                                                @change="patient_medication_profile_date2 = false"
                                            >
                                            </v-date-picker>
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
import PatientMedicationProfileRoutines from '@/components/PatientMedicationProfileRoutines'
export default {
    data(){
        return {
            routines: [],
            prns: [],
            otc_drugs: [],
            patient_medication_profile_date1: false,
            patient_medication_profile_date2: false,
            overlay: false,
            valid: true,
            popup: false,
            search: '',
            method: 'create',
            // patient_medication_profiles: [],
            patient_medication_profile: { routines: [] },
            headers: [
                { text: 'Date', align: 'center', sortable: true, value: 'createdOn' },
                { text: 'Edit', align: 'center', sortable: false, value: 'actions' },

            ],
            // requiredFileRules: [v => !!v || 'Contract is required', v => !v || v.size < 2000000 || 'File size should be less than 2 MB!'],
        }
    },
    components: {
        ClientNavbar,
        PatientMedicationProfileRoutines
    },
    beforeRouteUpdate (to, from, next) {
        this.overlay = true
        const parent = this
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClientPatientMedicationProfiles").then(function(docs){
            // parent.patient_medication_profiles = docs
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
        this.$store.dispatch("Client/getClientPatientMedicationProfiles").then(function(docs){
            // parent.patient_medication_profiles = docs
            parent.overlay = false
            console.log(docs)
        }).catch(function(error){
            parent.overlay = false
            console.log(error)
        })

        this.append_routine_to_array()
        this.append_prn_to_array()
        this.append_otc_drug_to_array()
    },
    computed: {
        ...mapGetters({
            patient_medication_profiles: 'Client/patient_medication_profiles'
        }),
    },
    methods: {
        remove_routine_from_array(index){
            this.routines.splice(index, 1)
        },
        append_routine_to_array(){
            let empty_routine = {
                date: '',
                dose: '',
                route: '',
                freq: '',
                n_c_o: '',
                d_c_date: '',
                drug_classification: '',
            }
            this.routines.push(empty_routine)
        },
        remove_prn_from_array(index){
            this.prns.splice(index, 1)
        },
        append_prn_to_array(){
            let empty_prn = {
                date: '',
                dose: '',
                route: '',
                freq: '',
                n_c_o: '',
                d_c_date: '',
                drug_classification: '',
            }
            this.prns.push(empty_prn)
        },
        remove_otc_drug_from_array(index){
            this.otc_drugs.splice(index, 1)
        },
        append_otc_drug_to_array(){
            let empty_otc_drug = {
                date: '',
                dose: '',
                route: '',
                freq: '',
                n_c_o: '',
                d_c_date: '',
                drug_classification: '',
            }
            this.otc_drugs.push(empty_otc_drug)
        },
        edit_pmp(document_id){
            this.overlay = true
            let parent = this
            this.$store.commit('Client/setClientPatientMedicationProfileDocumentId', document_id)
            this.$store.dispatch("Client/getClientPatientMedicationProfile").then(function(doc){
                console.log(doc)
                parent.patient_medication_profile = doc
                parent.routines = doc.routines
                parent.prns = doc.prns
                parent.otc_drugs = doc.otc_drugs
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
                this.patient_medication_profile.routines = this.routines
                this.patient_medication_profile.prns = this.prns
                this.patient_medication_profile.otc_drugs = this.otc_drugs
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
                this.patient_medication_profile.routines = this.routines
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