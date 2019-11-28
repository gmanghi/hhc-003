<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Management of Oral Medications:  </span> Patient's current ability to prepare and take all oral medications reliably and  safely, including administration of the correct dosage at the appropriate times/intervals. <span class="font-weight-bold">Excludes injectable and IV medications. (NOTE: This refers to ability, not compliance or willingness.)</span></div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5']"
                        label="Past"
                        v-model="medications.medications1_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5']"
                        label="Present"
                        v-model="medications.medications1_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Able to independently take the correct oral medication(s) and proper dosage(s) at the correct times</div>
                    <div class="body-2">2. Able to take medication(s) at the correct times if: (a) individual dosages are prepared in advance by  another person; OR (b) another person develops a drug diary or chart. </div>
                    <div class="body-2">3. Able to take medication(s) at the correct times if given reminders by another person at the appropriate times </div>
                    <div class="body-2">4. Unable to take medication unless administered by another person</div>
                    <div class="body-2">5. No oral medications prescribed</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Management of Injectable Medications  </span>Patient's current ability to prepare and take all prescribed injectable medications reliably and safely, including administration of correct dosage at the appropriate times/intervals. </div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', 'NA']"
                        label="Past"
                        v-model="medications.medications2_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', 'NA']"
                        label="Present"
                        v-model="medications.medications2_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Able to independently take the correct medication(s) and proper dosage(s) at the correct times</div>
                    <div class="body-2">2. Able to take injectable medication(s) at the correct times if:  (a) individual syringes are prepared in advance by  another person; OR (b) another person develops a drug diary or chart</div>
                    <div class="body-2">3. Able to take medication(s) at the correct times if given reminders by another person based on the frequency of the injection </div>
                    <div class="body-2">4. Unable to take injectable medication unless administered by another person</div>
                    <div class="body-2">NA - No injectable medications prescribed</div>
                </v-col>
                
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'medications' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>