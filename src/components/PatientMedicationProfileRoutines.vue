<template>
    <v-row dense>
        <v-col cols="12" md="1" sm="12">
            <v-menu
                v-model="date_popup1"
                :close-on-content-click="true"
                max-width="290"
                readonly
                >
                <template v-slot:activator="{ on }">
                    <v-text-field
                        :value="routine_date[index]"
                        clearable
                        label="Date"
                        readonly
                        v-on="on">
                    </v-text-field>
                </template>
                <v-date-picker
                    v-model="routine_date[index]"
                    @change="date_popup1 = false"
                ></v-date-picker>
            </v-menu>
        </v-col>
        <v-col cols="12" md="6" sm="12">
            <v-row no-gutters>
            <v-col cols="12" md="3" sm="12">
                <v-text-field label="Dose" v-model="routine_dose[index]"></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="12">
                <v-text-field label="Route" v-model="routine_route[index]"></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="12">
                <v-text-field label="Frequency" v-model="routine_freq[index]"></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="12">
                <v-text-field label="N/C/O" v-model="routine_nco[index]"></v-text-field>
            </v-col>
            </v-row>
        </v-col>
        
        <v-col cols="12" md="1" sm="12">
            <v-menu
                v-model="date_popup2"
                :close-on-content-click="false"
                max-width="290"
                readonly
                >
                <template v-slot:activator="{ on }">
                    <v-text-field
                        :value="routine_dc_date[index]"
                        clearable
                        label="D/C Date"
                        readonly
                        v-on="on">
                    </v-text-field>
                </template>
                <v-date-picker
                    v-model="routine_dc_date[index]"
                    @change="date_popup2 = false"
                ></v-date-picker>
            </v-menu>
        </v-col>
        <v-col cols="12" md="4" sm="12">
            <v-text-field label="Drug Classification" v-model="routine_drug_classification[index]"></v-text-field>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data(){
        return {
            date_popup1: false,
            date_popup2: false,
            patient_medication_profile_dose: [],
            routine_date: [],
            routine_dose: [],
            routine_route: [],
            routine_freq: [],
            routine_nco: [],
            routine_dc_date: [],
            routine_drug_classification: [],
        }
    },
    props: [ 'patient_medication_profile', 'index' ],
}
</script>