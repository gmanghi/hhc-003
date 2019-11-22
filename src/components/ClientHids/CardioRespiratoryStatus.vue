<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">When is the client dyspneic or noticeably short of breath?</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1','2','3','4','5']"
                        label="Past"
                        v-model="crs.crs1_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1','2','3','4','5']"
                        label="Present"
                        v-model="crs.crs1_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Patient is not short of breath</div>
                    <div class="body-2">2. When walking more than 20 feet, climbing stairs</div>
                    <div class="body-2">3. With moderate exertion (e.g, while dressing, using commode or bedpan, walking distances less than 20 feet)</div>
                    <div class="body-2">4. With minimal exertion (e.g, while eating, talking, or performing other ADLs) or with agitation</div>
                    <div class="body-2">5. At rest (during day or night)</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Respiratory treatments used at home. (Mark all that apply)</div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1','2','3','4']"
                        label="Past"
                        v-model="crs.crs2_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-select
                        :items="['1','2','3','4']"
                        label="Present"
                        v-model="crs.crs2_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                    <div class="body-2">1. Oxygen (intermittent or continuous)</div>
                    <div class="body-2">2. Ventilator (continually or at night)</div>
                    <div class="body-2">3. Continuous / Bi-level positive airway pressure</div>
                    <div class="body-2">4. None of the above</div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'crs' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>