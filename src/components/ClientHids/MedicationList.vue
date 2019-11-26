<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1">(Please see Medication Profile for complete list)</div>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Medicine"
                        required
                        v-model="ml.ml1_medicine"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Dose"
                        required
                        v-model="ml.ml1_dose"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Frequency"
                        required
                        v-model="ml.ml1_frequency"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Medicine"
                        required
                        v-model="ml.ml2_medicine"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Dose"
                        required
                        v-model="ml.ml2_dose"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Frequency"
                        required
                        v-model="ml.ml2_frequency"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Medicine"
                        required
                        v-model="ml.ml3_medicine"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Dose"
                        required
                        v-model="ml.ml3_dose"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Frequency"
                        required
                        v-model="ml.ml3_frequency"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                    <v-text-field 
                        label="ALLERGY: (Describe type of reactions) "
                        required
                        v-model="ml.ml3_allergy"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'ml' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>