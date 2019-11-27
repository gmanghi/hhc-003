<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1"><span class="font-weight-bold">Orientation</span></div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">What is the year?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse1_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse1_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">What is the season? </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse2_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse2_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">What is the date? </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse3_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse3_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1"> What is the day? </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse4_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse4_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">What is the month? </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse5_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse5_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Where are we?  </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse6_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse6_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Country? </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse7_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse7_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Town or city? </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse8_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse8_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Hospital? </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse9_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse9_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Floor?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse10_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse10_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1"><span class="font-weight-bold">Registration</span></div>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1">Name 3 objects, taking one (1) object to say each then the patient all three (3) after you have said them. Give one (1) point for each correct answer. Repeat the answers until the patient learns all three (3). </div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Mango</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse11_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse11_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Table</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse12_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse12_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Paper</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse13_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse13_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1"><span class="font-weight-bold">ATTENTION AND CALCULATION </span></div>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1">Serial sevens (7). Give one point (1) for each correct answer. Stop after five (5) answers. Alternate: Spell WORD backwards </div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">93/D</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse14_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse14_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">86/L</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse15_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse15_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">79/R</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse16_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse16_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">72/O</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse17_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse17_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">65/W</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse18_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse18_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1"><span class="font-weight-bold">RECALL: </span> Ask for names of three (3) objects learned in registration. Give one (1) point for each correct answer.</div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Mango </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse19_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse19_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Table </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse20_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse20_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Paper </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse21_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse21_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1"><span class="font-weight-bold">LANGUAGE:  </span> Point to a pencil and watch and have the patient name them as you point</div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Pencil  </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse22_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse22_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Watch  </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse23_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse23_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1"><span class="font-weight-bold">COMPREHENSION</span></div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Have the patient repeat  <span class="font-weight-bold">“NO IFs AND NO BUTs”</span> </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse24_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse24_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Have the patient follow a three-stage command:  Take the paper in your right hand </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse25_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse25_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Fold the paper in half </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse26_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse26_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1"> Put on the floor  </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse27_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse27_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Have the patient read and obey the following: <span class="font-weight-bold"> “CLOSE YOUR EYES” </span> Write in large letters) </div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse28_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse28_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Have the patient write a sentence of his or her own choice. The sentence should contain a subject and an object and should make sense. Ignore spelling when scoring</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse29_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse29_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Enlarge the design to 1-5 cm per side and have the patient copy it. Give one (1) point if all sides and angles are preserved and if the intersecting sides form a quadrangle</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Past Score"
                        required
                        v-model="mmse.mmse30_past"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="Present Score"
                        required
                        v-model="mmse.mmse30_present"
                        hint="POINTS per CORRECT ANSWER: 1"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1"><span class="font-weight-bold"> TOTAL: </span></div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="TOTAL Past Score"
                        required
                        v-model="mmse.mmsetotal_past"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-text-field 
                        label="TOTAL Present Score"
                        required
                        v-model="mmse.mmsetotal_present"
                    ></v-text-field>
                </v-col>
                <!--
                <v-col cols="12" sm="12" md="12">
                    <v-combobox
                        v-model="mmse.mmse1"
                        :items="['Patient lives alone',
                                'Patient lives with other person(s) in the home',
                                'Patient lives in conregate situation (e.g. assissted living)']"
                        label="Mini Living Situation: Which of the following best describes the patient's residential circumstances and availability of assisstance?"
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
    props: [ 'mmse' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>