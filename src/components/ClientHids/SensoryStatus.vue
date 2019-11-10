<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Vision</span> (with corrective lenses if the patient usually wears them)</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3']"
                        label="Past"
                        v-model="ss.s1_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3']"
                        label="Present"
                        v-model="ss.s1_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Normal: sees adequately in most situations; can see medication labels and newsprint</div>
                    <div class="body-2">2. Partially impaired: cannot see medication label or newsprint but can see obstacles in path and the surrounding layout; can count fingers at arms length.</div>
                    <div class="body-2">3. Severely impaired: cannot locate objects without hearing or touching them or patient is none responsive</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Ability to hear</span> (with hearing aid or hearing appliance if normally used)</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3','4']"
                        label="Past"
                        v-model="ss.s2_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3','4']"
                        label="Present"
                        v-model="ss.s2_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Adequate: hears normal conversationwithout difficulty </div>
                    <div class="body-2">2. Mildly to moderately impaired: hearing in some environments or speaker may need to increase volume or speak distinctly</div>
                    <div class="body-2">3. Severely impaired: absence of useful hearing</div>
                    <div class="body-2">4. UK: Unable to assess hearing</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Understanding of Verbal Content</span> in patient's own language (with hearing aid or device if used):</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3','4']"
                        label="Past"
                        v-model="ss.s3_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3','4']"
                        label="Present"
                        v-model="ss.s3_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Understands: clear comprehension without cues or repetitions</div>
                    <div class="body-2">2. Usually Understands: understands most conversation,but misses some part/intent of message. Requires cues at times to understand</div>
                    <div class="body-2">3. Sometimes Understands: understands only basic conversations or simple,direct phrases. Frequently requires cues to understand. Rarely / Never understands</div>
                    <div class="body-2">4. UK: Unable to assess understanding</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Speech and Oral</span> (Verbal) Expression of Language (in patient's own language):</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3','4','5','6']"
                        label="Past"
                        v-model="ss.s4_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2','3','4','5','6']"
                        label="Present"
                        v-model="ss.s4_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Expresses complex ideas, feelings, and needs clearly, completely and easily in all situations with no observable impairment</div>
                    <div class="body-2">2. Minimal difficulty in expressing ideas and needs (may take extra time; makes occasional errors in word choice, grammar or speech intelligibility) Speaks in phrases or short sentences</div>
                    <div class="body-2">3. Expresses simple ideas or needs with moderate difficulty (needs prompting or assistance, erros in word choice, organization or speech intelligibility) Speaks in phrases or short sentences</div>
                    <div class="body-2">4. Has severe difficulty expressing basic ideas or needs and requires maximal assistance or guessing by listener. Speech limited to single words or short phrases</div>
                    <div class="body-2">5. Unable to express basic needs even with maximal prompting or assistance but is not comatose or unresponsive (e.g., speech is nonsensical or unintelligible)</div>
                    <div class="body-2">6. Patient nonresponsive or unuable to speak</div>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'ss' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>