<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Has this patient been treated for a <span class="font-weight-bold">Urinary Tract Infection</span> in the past 14 days?</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', 'NA','UK']"
                        label="Past"
                        v-model="es.es1_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', 'NA','UK']"
                        label="Present"
                        v-model="es.es1_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. No</div>
                    <div class="body-2">2. Yes</div>
                    <div class="body-2">NA - Patient on prophylactic treatment</div>
                    <div class="body-2">UK - Unknown</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Urinary Incontinence or Urinary Catheter Presence</span></div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3']"
                        label="Past"
                        v-model="es.es2_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3']"
                        label="Present"
                        v-model="es.es2_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. No incontinence or catheter (includes anuria or ostomy for urinary drainage)</div>
                    <div class="body-2">2. Patient is incontinent</div>
                    <div class="body-2">3. Patient requires a urinary catheter (i.e.,external, indwelling, intermittent, suprapubic)</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">When does <span class="font-weight-bold">Urinary Incontinence</span> occur?</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5']"
                        label="Past"
                        v-model="es.es3_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5']"
                        label="Present"
                        v-model="es.es3_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Timed-voiding defers incontinence</div>
                    <div class="body-2">2. Occasional stress incontinence</div>
                    <div class="body-2">3. During the night only</div>
                    <div class="body-2">4. During the day only</div>
                    <div class="body-2">5. During the day and night</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Bowel Incontinence Frequency</span></div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6', 'NA', 'UK']"
                        label="Past"
                        v-model="es.es4_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2', '3', '4', '5', '6', 'NA', 'UK']"
                        label="Present"
                        v-model="es.es4_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Very rarely or never has bowel incontinence</div>
                    <div class="body-2">2. Less than once weekly</div>
                    <div class="body-2">3. Once to three times weekly</div>
                    <div class="body-2">4. Four to six times weekly</div>
                    <div class="body-2">5. On a daily basis</div>
                    <div class="body-2">6. More ofthen than once daily</div>
                    <div class="body-2">NA - Patient has ostomy for bowel elimination</div>
                    <div class="body-2">UK - Unknown</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Ostomy for Bowel Elimination:</span> Does this patient have an Ostomy (i.e. colostomy) for bowel elimination?</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2']"
                        label="Past"
                        v-model="es.es5_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1', '2']"
                        label="Present"
                        v-model="es.es5_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Patient does not have an ostomy for bowel elimination</div>
                    <div class="body-2">2. Patient has ostomy for bowel elimination</div>
                </v-col>
                
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'es' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>