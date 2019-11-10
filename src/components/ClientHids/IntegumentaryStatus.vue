<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Wound/s Present</span></div>
                </v-col>
                <v-col cols="12" sm="6" md="9">
                    <v-combobox
                        v-model="integumentary.i1"
                        :items="['Past','Present']"
                        label="No"
                        single    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i2"
                        :items="['Past','Present']"
                        label="Yes"
                        single    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <div class="subtitle-1"><span class="font-weight-bold">Type of wound and anatomic site</span></div>
                </v-col>
                <v-col cols="12" sm="6" md="9">
                    <v-combobox
                        v-model="integumentary.i3"
                        :items="['Past','Present']"
                        label="Pressure Ulcer"
                        single    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i4"
                        :items="['Past','Present']"
                        label="Stasis Ulcer"
                        single    
                        chips
                    ></v-combobox>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'integumentary' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>