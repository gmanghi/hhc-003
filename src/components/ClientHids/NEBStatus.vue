<template>
    <div>
        <v-container>
            <v-row>
                 <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Cognitive functioning: </span> patient's current (day of assessment) level of alertness, orientation, comprehension, concentration and immediate memory for simple commands</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5']"
                        label="Past"
                        v-model="nebs.nebs1_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5']"
                        label="Present"
                        v-model="nebs.nebs1_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Alert/oriented,able to focus and shift attention, comprehends and recalls tak directions independently</div>
                    <div class="body-2">2. Requires prompting (cuing, repetition, reminders)only undeer stressful or unfamiliar conditions</div>
                    <div class="body-2">3. Requires assistance and some direction in specific situations (e.g.,on all tasks involving shifting of attention), or consistently requires low stimulus environment due to distractibility</div>
                    <div class="body-2">4. Requires considerable assistance in routine situations. Is not alert and oriented or is unable to shift attention and recall directions more than half the time</div>
                    <div class="body-2">5. Totally dependent due to disturbances such as constant disorientation, coma, persistent vegetative state, or delirium</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">When confused (Reported or Observed)</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', 'NA']"
                        label="Past"
                        v-model="nebs.nebs2_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', 'NA']"
                        label="Present"
                        v-model="nebs.nebs2_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Never</div>
                    <div class="body-2">2. In new or complex situations only on awakening or at night only</div>
                    <div class="body-2">3. During the day and evening,but not constantly</div>
                    <div class="body-2">NA - Patient nonresponsive </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">When Anxious (Reported or Abserved)</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', 'NA']"
                        label="Past"
                        v-model="nebs.nebs3_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', 'NA']"
                        label="Present"
                        v-model="nebs.nebs3_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. None of the time</div>
                    <div class="body-2">2. Less often than daily</div>
                    <div class="body-2">3. Daily,but not constantly</div>
                    <div class="body-2">4. All of the time </div>
                    <div class="body-2">NA - Patient nonresponsive </div>
                </v-col>


                
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'nebs' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>