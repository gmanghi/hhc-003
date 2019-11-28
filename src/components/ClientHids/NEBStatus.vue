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
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Cognitive, behavioral, and psychiatric symptoms that are demonstrated at least once a week (Reported  Or Observed): (Mark all that apply.)</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6', '7']"
                        label="Past"
                        v-model="nebs.nebs4_past"
                        multiple
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6', '7']"
                        label="Present"
                        v-model="nebs.nebs4_present"
                        multiple
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Memory deficit: failure to recognize familiar persons/places, inability to recall events of past 24 hours, significant memory loss so that supervision is required</div>
                    <div class="body-2">2. Impaired decision-making: failure to perform usual ADLs or IADLs, inability to appropriately stop activities,  jeopardizes safety through actions</div>
                    <div class="body-2">3. Verbal disruption: yelling, threatening, excessive profanity, sexual references, etc.</div>
                    <div class="body-2">4. Physical aggression: aggressive or combative to self and others (e.g., hits self, throws objects,punches, dangerous maneuvers with wheelchair or other objects)</div>
                    <div class="body-2">5. Disruptive, infantile, or socially inappropriate behavior (excludes verbal actions)</div>
                    <div class="body-2">6. Delusional, hallucinatory, or paranoid behavior</div>
                    <div class="body-2">7. None of the above behaviors demonstrated</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold"> Frequency of Disruptive Behavior Symptoms  (Reported or Observed) </span> Any physical, verbal, or other  disruptive/dangerous symptoms that are injurious to self  or others or jeopardize personal safety. </div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5','6']"
                        label="Past"
                        v-model="nebs.nebs5_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5','6']"
                        label="Present"
                        v-model="nebs.nebs5_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Never</div>
                    <div class="body-2">2. Less than once a month</div>
                    <div class="body-2">3. Once a month</div>
                    <div class="body-2">4. Several times each month</div>
                    <div class="body-2">5. Several times a week</div>
                    <div class="body-2">6. At least daily</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Is this patient receiving  <span class="font-weight-bold">Psychiatric Services  </span> at home  Provided by a qualified psychiatric physician/nurse?</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2']"
                        label="Past"
                        v-model="nebs.nebs6_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2']"
                        label="Present"
                        v-model="nebs.nebs6_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Yes</div>
                    <div class="body-2">2. No</div>
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