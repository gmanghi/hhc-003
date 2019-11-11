<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <v-combobox
                        v-model="la.la1"
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
                        v-model="la.la2"
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
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'la' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>