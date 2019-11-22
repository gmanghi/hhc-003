<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1"><span class="font-weight-bold">Pressure Ulcer Stages</span></div>
                </v-col>
                <v-col cols="12" sm="6" md="9">
                    <div class="subtitle-1"><span class="font-weight-bold">Stage 1:</span> Nonblanchable erythema of intact skin; the heralding of skin ulceration. In dark-pigmented skin, warmth, edema, hardness or discolored skin may be indicators.</div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-combobox
                        v-model="pu.pu1"
                        :items="['1','2','3 or more']"
                        label="Number of Pressure Ulcers"
                        single    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9">
                    <div class="subtitle-1"><span class="font-weight-bold">Stage 2:</span> Partial thickness skin loss involving epidermis and/or dermis. The ulcer is superficial and presents clinically as an abrasion, blister, or shallow crater.</div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-combobox
                        v-model="pu.pu2"
                        :items="['1','2','3 or more']"
                        label="Number of Pressure Ulcers"
                        single    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9">
                    <div class="subtitle-1"><span class="font-weight-bold">Stage 3:</span> Full-thickness skin loss involving damage or necrosis of subcutaneous tissue which may extend down to,but not through, underlying fascia. The ulcer presents clinically as a deep crater with or without undermining of adjacent tissue.</div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-combobox
                        v-model="pu.pu3"
                        :items="['1','2','3 or more']"
                        label="Number of Pressure Ulcers"
                        single    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9">
                    <div class="subtitle-1"><span class="font-weight-bold">Stage 4:</span> Full-thickness skin loss with extensive destruction, tissue necrosis,or damage to muscle, bone, or supporting structures (e.g. tendon, joint capsule, etc.)</div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-combobox
                        v-model="pu.pu4"
                        :items="['1','2','3 or more']"
                        label="Number of Pressure Ulcers"
                        single    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9">
                    <div class="subtitle-1">In addition to the above, is there at least one pressure ulcer that cannot be staged or observed due to the presence of eschar or a non-removable dressing, including casts?</div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-combobox
                        v-model="pu.pu5"
                        :items="['Yes', 'No']"
                        label="Yes / No"
                        single    
                        chips
                    ></v-combobox>
                </v-col>
                <!--<v-col cols="12" sm="12" md="12">
                    <v-combobox
                        v-model="pu.pu1"
                        :items="['Patient lives alone',
                                'Patient lives with other person(s) in the home',
                                'Patient lives in conregate situation (e.g. assissted living)']"
                        label="Patient Living Situation: Which of the following best describes the patient's residential circumstances and availability of assisstance?"
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
    props: [ 'pu' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>