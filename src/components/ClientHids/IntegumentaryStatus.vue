<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="6">
                    <div class="subtitle-1"><span class="font-weight-bold">Wound/s Present</span></div>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                    <v-combobox
                        v-model="integumentary.i1_past"
                        :items="['Yes','No']"
                        label="Past"
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                    <v-combobox
                        v-model="integumentary.i1_present"
                        :items="['Yes','No']"
                        label="Present"
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
                        multiple    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i4"
                        :items="['Past','Present']"
                        label="Stasis Ulcer"
                        multiple    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i5"
                        :items="['Past','Present']"
                        label="Surgical Wound"
                        multiple    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i6"
                        :items="['Past','Present']"
                        label="Non-specific: Skin lesion or open wound"
                        multiple    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i7"
                        :items="['Past','Present']"
                        label="Pressure ulcer assessment tool: Braden Scoring"
                        multiple    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i8"
                        :items="['Past','Present']"
                        label="Sites"
                        multiple    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-text-field 
                        label="Notes:"
                        required
                        v-model="integumentary.i9">
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i10"
                        :items="['Past','Present']"
                        label="Number of ulcers observed"
                        multiple    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-text-field 
                        label="Notes:"
                        required
                        v-model="integumentary.i11">
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i12"
                        :items="['Past','Present']"
                        label="Newly Epithelialized"
                        multiple    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i13"
                        :items="['Past','Present']"
                        label="Fully granulating"
                        multiple    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i14"
                        :items="['Past','Present']"
                        label="Early/partial granulation"
                        multiple    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i15"
                        :items="['Past','Present']"
                        label="Not healing"
                        multiple    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="9" offset-md="3">
                    <v-combobox
                        v-model="integumentary.i16"
                        :items="['Past','Present']"
                        label="NA"
                        multiple    
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