<template>
    <div>
        <!-- <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            > -->
            <!-- <v-card>
                <v-card-title> -->
                    <!-- <span class="headline">Demographic Data</span> -->
                <!-- </v-card-title>
                <v-card-text> -->
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12" md="3">
                                <v-text-field 
                                    label="Name"
                                    required
                                    :rules="requiredStringRules"
                                    v-model="demographic.d1"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="3">
                                <v-text-field 
                                    label="Age"
                                    required
                                    :rules="requiredStringRules"
                                    v-model="demographic.d2"
                                    type="number"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="3">
                                <v-select
                                    :items="['Male', 'Female']"
                                    label="Gender"
                                    :rules="requiredStringRules"
                                    v-model="demographic.d3"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="4" md="3">
                                <v-text-field 
                                    label="Case No."
                                    required
                                    :rules="requiredStringRules"
                                    v-model="demographic.d4">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field 
                                    label="Address"
                                    v-model="demographic.d5">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-text-field 
                                    label="Contact Number"
                                    required
                                    v-model="demographic.d6">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-text-field 
                                    label="Email"
                                    required
                                    v-model="demographic.d7">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-text-field 
                                    label="Ethnicity/Race"
                                    required
                                    v-model="demographic.d8">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-menu
                                    v-model="date_of_birth_popup"
                                    :close-on-content-click="false"
                                    max-width="290"
                                    >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                            :value="computedDateOfBirth"
                                            clearable
                                            label="Date of Birth"
                                            readonly
                                            v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="demographic.d9"
                                        @change="date_of_birth_popup = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-text-field 
                                    label="Visiting Physician/Home Health Care Representative"
                                    required
                                    v-model="demographic.d10">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-combobox
                                    v-model="demographic.d11"
                                    :items="['MD','RN','PT']"
                                    label="Discipline of Person Completing Assessment"
                                    multiple    
                                ></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-text-field 
                                    label="Primary Caregiver"
                                    required
                                    v-model="demographic.d12">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-text-field 
                                    label="Contact Number"
                                    required
                                    v-model="demographic.d13">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="4">
                                <v-text-field 
                                    label="Primary Referring Physician"
                                    required
                                    v-model="demographic.d14">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="4">
                                <v-text-field 
                                    label="Hospital/Agency"
                                    required
                                    v-model="demographic.d15">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="4">
                                <v-text-field 
                                    label="Service Rendered"
                                    required
                                    v-model="demographic.d16">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-combobox
                                    v-model="demographic.d17"
                                    :items="['Start of Care, Further Visits Planned','Continuation of Care (After Hospital Stay)','Start of Care, No Further Visits Planned','Continuation of Care (After Facility Stay)']"
                                    label="This Assessment is currrently being completed for the following reason"
                                    multiple    
                                    chips
                                ></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-menu
                                    v-model="date_of_visit_popup"
                                    :close-on-content-click="false"
                                    max-width="290"
                                    >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                            :value="computedDateOfVisit"
                                            clearable
                                            label="Date of Visit"
                                            readonly
                                            v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="demographic.d18"
                                        @change="date_of_visit_popup = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-text-field 
                                    label="BP"
                                    required
                                    v-model="demographic.d19">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-text-field 
                                    label="T"
                                    required
                                    v-model="demographic.d20">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-text-field 
                                    label="HR"
                                    required
                                    v-model="demographic.d21">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="3">
                                <v-text-field 
                                    label="RR"
                                    required
                                    v-model="demographic.d22">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="4">
                                <v-text-field 
                                    label="Pain"
                                    required
                                    v-model="demographic.d23">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="4">
                                <v-text-field 
                                    label="Weight(kg)"
                                    required
                                    v-model="demographic.d24">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="4">
                                <v-text-field 
                                    label="Height(cm)"
                                    required
                                    v-model="demographic.d25">
                                </v-text-field>
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
    props: [ 'demographic' ],
    data(){
        return {
            // overlay: false,
            // valid: true,
            date_of_birth_popup: false,
            date_of_visit_popup: false,
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
    computed: {
        computedDateOfVisit(){
            return this.demographic.d18 ? moment(this.demographic.d18).format('YYYY-MM-DD') : ''
        },
        computedDateOfBirth(){
            return this.demographic.d9 ? moment(this.demographic.d9).format('YYYY-MM-DD') : ''
        },
    },
    methods: {
        // process_save(){ 
        //     if (this.$refs.form.validate()) {
        //         this.overlay = true
        //         const parent = this
        //         const data = {
        //             createdOn: new Date(), 
        //             demographic: this.demographic,
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
        //             demographic: this.demographic
        //         }
        //         this.$store.commit('Client/setClientHidsDemographic', data.demographic)
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