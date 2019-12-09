<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Body Mass Index (BMI) Weight in kg/height</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1', '3']"
                        label="Previous Point"
                        v-model="mna.mna1_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1', '3']"
                        label="Current Point"
                        v-model="mna.mna1_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. BMI < 19 </div>
                    <div class="body-2">1. BMI < 21</div>
                    <div class="body-2">3. BMI > 23</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Mid Arm Circumference (MAC)</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','0.5', '1']"
                        label="Previous Point"
                        v-model="mna.mna2_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','0.5', '1']"
                        label="Current Point"
                        v-model="mna.mna2_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. MAC < 21 </div>
                    <div class="body-2">0.5. MAC 21-21</div>
                    <div class="body-2">1. MAC > 22</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Calf Circumference (CC in cm)</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1']"
                        label="Previous Point"
                        v-model="mna.mna3_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1']"
                        label="Current Point"
                        v-model="mna.mna3_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. CC < 31 </div>
                    <div class="body-2">1. CC > 31</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Weight Loss during last 3 months</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2','3']"
                        label="Previous Point"
                        v-model="mna.mna4_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2','3']"
                        label="Current Point"
                        v-model="mna.mna4_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. Wt loss > 3 kg (6.6 lbs)</div>
                    <div class="body-2">1. Does not know</div>
                    <div class="body-2">2. Wt loss between 1-3 kg</div>
                    <div class="body-2">3. No weight loss</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Lives independently (Not in nursing home)</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1']"
                        label="Previous Point"
                        v-model="mna.mna5_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1']"
                        label="Current Point"
                        v-model="mna.mna5_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. Yes</div>
                    <div class="body-2">1. No</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Takes more than 3 prescriptions per day</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1']"
                        label="Previous Point"
                        v-model="mna.mna6_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1']"
                        label="Current Point"
                        v-model="mna.mna6_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. Yes</div>
                    <div class="body-2">1. No</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Has suffered Psychological Stress or acute disease in the past 3 months</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['1','2']"
                        label="Previous Point"
                        v-model="mna.mna7_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['1','2']"
                        label="Current Point"
                        v-model="mna.mna7_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">1. Yes</div>
                    <div class="body-2">2. No</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Mobility</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2']"
                        label="Previous Point"
                        v-model="mna.mna8_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2']"
                        label="Current Point"
                        v-model="mna.mna8_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. Bed or chair bound</div>
                    <div class="body-2">1. Able to get out of bed but does not go out</div>
                    <div class="body-2">2. Goes out</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Neuropsychological Stress or acute disease in the past 3 months</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','2']"
                        label="Previous Point"
                        v-model="mna.mna9_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','2']"
                        label="Current Point"
                        v-model="mna.mna9_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. Yes</div>
                    <div class="body-2">2. No</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Neuropsychological Problems</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2']"
                        label="Previous Point"
                        v-model="mna.mna10_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2']"
                        label="Current Point"
                        v-model="mna.mna10_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. Severe Dementia/Depression</div>
                    <div class="body-2">1. Mild Dementia</div>
                    <div class="body-2">2. No psychological problem</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Pressure sores or skin ulcers</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1']"
                        label="Previous Point"
                        v-model="mna.mna11_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1']"
                        label="Current Point"
                        v-model="mna.mna11_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. Yes</div>
                    <div class="body-2">1. No</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">How many full meals does the patient eat daily</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2']"
                        label="Previous Point"
                        v-model="mna.mna12_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2']"
                        label="Current Point"
                        v-model="mna.mna12_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. 1 meal</div>
                    <div class="body-2">1. 2 meals</div>
                    <div class="body-2">2. 3 meals</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Selected consumption markers for protein intake atleast 1 serving of dairy products per day: Yes/No</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Previous Point"
                        v-model="mna.mna13_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Current Point"
                        v-model="mna.mna13_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">Yes</div>
                    <div class="body-2">No</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Two or more servings of legume or egg per week: Yes/No</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Previous Point"
                        v-model="mna.mna14_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Current Point"
                        v-model="mna.mna14_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">Yes</div>
                    <div class="body-2">No</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Meat, fish or poultry everyday: </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','0.5','1']"
                        label="Previous Point"
                        v-model="mna.mna15_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','0.5','1']"
                        label="Current Point"
                        v-model="mna.mna15_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. If 0 or 1 answer is Yes</div>
                    <div class="body-2">0.5. If 2 Yes</div>
                    <div class="body-2">1. If 3 Yes</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Consumes 2 or more servings of fruit or vegetables </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1']"
                        label="Previous Point"
                        v-model="mna.mna16_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1']"
                        label="Current Point"
                        v-model="mna.mna16_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. No</div>
                    <div class="body-2">1. Yes</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Has food intake declined over the past 3 months due to loss of appetite digestive problems, chewing or swallowing difficulties</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2']"
                        label="Previous Point"
                        v-model="mna.mna17_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2']"
                        label="Current Point"
                        v-model="mna.mna17_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. Severe loss of apetite</div>
                    <div class="body-2">1. Moderate loss of apetite</div>
                    <div class="body-2">2. No loss of apetite</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">How much fluid (water juice, coffee or tea) is consumed per day?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','0.5','1']"
                        label="Previous Point"
                        v-model="mna.mna18_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','0.5','1']"
                        label="Current Point"
                        v-model="mna.mna18_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. Less than 1 cup</div>
                    <div class="body-2">0.5. 3-5 cups</div>
                    <div class="body-2">1. More than 5 cups</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="subtitle-1">Mode of Feeding</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2']"
                        label="Previous Point"
                        v-model="mna.mna19_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['0','1','2']"
                        label="Current Point"
                        v-model="mna.mna19_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <div class="body-2">0. Unable to feed without assistance</div>
                    <div class="body-2">1. Self-fed with some difficulty</div>
                    <div class="body-2">2. Self-fed without any problem</div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field 
                        label="Previous Total"
                        required
                        v-model="mna.mna20_past"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field 
                        label="Current Total"
                        required
                        v-model="mna.mna20_present"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1"><span class="font-weight-bold">> 24 POINTS: WELL NOURISHED 17-23.5 RISK FOR MALNUTRITION < 17: MALNOURISHED</span></div>
                </v-col>
                
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'mna' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>