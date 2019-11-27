<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <v-textarea 
                        auto-grow outlined
                        label="SUMMARY OF FINDINGS:"
                        required
                        v-model="sof.sof1">
                    </v-textarea>
                </v-col>

                <!--<v-col cols="12" sm="12" md="12">
                    <v-combobox
                        v-model="sof.sof1"
                        :items="['Patient lives alone',
                                'Patient lives with other person(s) in the home',
                                'Patient lives in conregate situation (e.g. assissted living)']"
                        label="Summary of findings Living Situation: Which of the following best describes the patient's residential circumstances and availability of assisstance?"
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
    props: [ 'sof' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>