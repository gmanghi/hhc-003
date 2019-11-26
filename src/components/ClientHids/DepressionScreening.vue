<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1"><span class="font-weight-bold">Depression Screening: “Geriatric Depression Scale”</span></div>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Are you basically satisfied with your life?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds1_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds1_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Have you dropped many of your activities or interest?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds2_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds2_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Do you feel that your life is empty?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds3_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds3_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Do you often get bored?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds4_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds4_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Are you good spirits most of the time?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds5_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds5_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Are you afraid that something bad is going to happen to you?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds6_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds6_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Do you feel happy most of the time?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds7_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds7_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Do you often feel helpless?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds8_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds8_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Do you prefer to stay home rather than going out doing new things?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds9_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds9_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Do you feel you have more problems with memory than most?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds10_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds10_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Do you think it is wonderful to be alive now</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds11_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds11_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Do you feel pretty worthless the way you are now?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds12_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds12_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Do you feel full of energy?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds13_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds13_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Do you feel your situation is hopeless?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds14_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds14_present"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <div class="subtitle-1">Do you feel most people are better off than you are?</div>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Past"
                        v-model="ds.ds15_past"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                    <v-select
                        :items="['Yes','No']"
                        label="Present"
                        v-model="ds.ds15_present"
                    ></v-select>
                </v-col>
                
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'ds' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>