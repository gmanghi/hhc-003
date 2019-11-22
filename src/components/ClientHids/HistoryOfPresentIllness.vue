<template>
    <div>
        <!-- <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            > -->
            <!-- <v-card>
                <v-card-title> -->
                    <!-- <span class="headline">History of Present Illness</span> -->
                <!-- </v-card-title>
                <v-card-text> -->
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-combobox
                                    v-model="hopi.h1"
                                    :items="['Regular hospital ward(Med/Surg)','ICU/iCCU/NICU/SICU']"
                                    label="From which of the following was the patient discharged during the past 14 days?"
                                    multiple    
                                    chips
                                ></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field 
                                    label="Hospital discharge date (most recent)"
                                    required
                                    v-model="hopi.h2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field 
                                    label="Inpatient diagnosis (for only those conditions treated during hospital admission within 14 days)"
                                    required
                                    v-model="hopi.h3">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-textarea 
                                    auto-grow outlined
                                    label="List down all diagnosis during the inpatient admission"
                                    required
                                    v-model="hopi.h4">
                                </v-textarea>
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-textarea 
                                    auto-grow outlined
                                    label="List down all procedures (dianostic/therapeutic) duritn the inpatient admission"
                                    required
                                    v-model="hopi.h5">
                                </v-textarea>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-combobox
                                    v-model="hopi.h6"
                                    :items="['Urinary Incontinence',
                                            'Indwelling/suprapubic catherer',
                                            'Intractable pain',
                                            'Impaired decision-making',
                                            'disruptive or socially inappropriate behavior',
                                            'Memory loss to the extent that supervision is required',
                                            'None of the above',
                                            'Not applicable',
                                            'Unknown']"
                                    label="Conditions which existed prior to the inpatient stay: (Mark all thet apply)"
                                    multiple    
                                    chips
                                ></v-combobox>
                            </v-col>
                        </v-row>
                    </v-container>
                <!-- </v-card-text> -->
                <!-- <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="popup_close">Close</v-btn>
                    <v-btn color="blue darken-1" v-if="method === 'create'" text @click="process_save">Save</v-btn>
                    <v-btn color="blue darken-1" v-if="method === 'update'" text @click="process_update">Update</v-btn>
                </v-card-actions> -->
            <!-- </v-card> -->
            <!-- <v-overlay :value="overlay">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay> -->
        <!-- </v-form> -->
        <!-- <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay> -->
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'hopi' ],
    data(){
        return {
            // overlay: false,
            // valid: true,
            // date_of_birth_popup: false,
            // date_of_visit_popup: false,
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
    computed: {
        // computedDateOfVisit(){
        //     return this.demographic.d18 ? moment(this.demographic.d18).format('YYYY-MM-DD') : ''
        // },
        // computedDateOfBirth(){
        //     return this.demographic.d9 ? moment(this.demographic.d9).format('YYYY-MM-DD') : ''
        // },
    },
    methods: {
        // process_save(){ 
        //     if (this.$refs.form.validate()) {
        //         this.overlay = true
        //         const parent = this
        //         const data = {
        //             createdOn: new Date(), 
        //             hopl: this.hopl
        //         }
        //         this.$store.commit('Client/setClientHids', data)
        //         this.$store.dispatch("Client/createClientHids").then(function(doc){
        //             console.log('saveClientHids',doc)
        //             parent.popup = false
        //             parent.overlay = false
        //         }).catch(function(error){
        //             console.log(error)
        //         })
        //     }
        // },
        // process_update(){
        //     if (this.$refs.form.validate()) {
        //         this.overlay = true
        //         const parent = this
        //         const data = {
        //             hopl: this.hopl
        //         }
        //         this.$store.commit('Client/setClientHidsHistoryPresentIllness', data.demographic)
        //         this.$store.dispatch("Client/updateClientHids").then(function(doc){
        //             console.log('Document Updated!',doc)
        //             parent.overlay = false
        //             parent.popup_close()
        //         }).catch(function(error){
        //             console.log(error)
        //         })
        //     }
        // },
        // popup_close(){
        //     this.$refs.form.reset()
        //     this.$emit('childPopupClose')
        // }
    }
}
</script>