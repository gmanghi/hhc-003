<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Patient-specific parameters for notifying physician of changes in vital signs or other clinical findings</div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field 
                        label="Specify:"
                        required
                        v-model="poc.poc1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">iabetic foot care including monitoring for the  b. presence of skin lesions on the lower extremities and patient/caregiver education on proper foot care</div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field 
                        label="Specify:"
                        required
                        v-model="poc.poc2"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Falls prevention interventions </div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field 
                        label="Specify:"
                        required
                        v-model="poc.poc3"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Depression intervention(s) such as medication, referral for other treatment, or a monitoring plan current treatment </div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field 
                        label="Specify:"
                        required
                        v-model="poc.poc4"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">tervention(s) to monitor and mitigate pain  </div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field 
                        label="Specify:"
                        required
                        v-model="poc.poc5"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">tervention(s) to prevent pressure ulcers   </div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field 
                        label="Specify:"
                        required
                        v-model="poc.poc6"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Pressure ulcer treatment based on principles of  f. moist wound healing OR order for treatment based on moist wound healing has been requested from physician  </div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field 
                        label="Specify:"
                        required
                        v-model="poc.poc7"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Need for referral (PT, OT, ST, Nutritionist, specialty consult, laboratory testing, imaging, Oxygen, DME, etc)   </div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field 
                        label="Specify:"
                        required
                        v-model="poc.poc8"
                    ></v-text-field>
                </v-col>

                <!--<v-col cols="12" sm="12" md="12">
                    <v-combobox
                        v-model="poc.poc1"
                        :items="['Patient lives alone',
                                'Patient lives with other person(s) in the home',
                                'Patient lives in conregate situation (e.g. assissted living)']"
                        label="Plan of care Living Situation: Which of the following best describes the patient's residential circumstances and availability of assisstance?"
                        single    
                        chips
                    ></v-combobox>
                </v-col>-->
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'poc' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>