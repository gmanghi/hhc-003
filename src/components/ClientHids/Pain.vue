<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Has this patient had a formal Pain Assessment using a  standardized pain assessment  tool </span>  (appropriate to the patient’s ability to communicate the severity of pain)? </div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3']"
                        label="Past"
                        v-model="pain.pain1_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3']"
                        label="Present"
                        v-model="pain.pain1_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. No standardized assessment conducted </div>
                    <div class="body-2">2. Yes, and it does not indicate severe pain </div>
                    <div class="body-2">3. Yes, and it indicates severe pain </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Frequency of Pain Interfering  </span> with patient's activity or movement: </div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5']"
                        label="Past"
                        v-model="pain.pain2_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5']"
                        label="Present"
                        v-model="pain.pain2_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Patient has no pain </div>
                    <div class="body-2">2. Patient has pain that does not interfere with activity or movement </div>
                    <div class="body-2">3. Less often than daily </div>
                    <div class="body-2">4. Daily, but not constantly  </div>
                    <div class="body-2">5. All of the time  </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'pain' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>