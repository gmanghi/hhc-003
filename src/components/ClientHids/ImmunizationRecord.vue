<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <div class="subtitle-1"><span class="font-weight-bold">VACCINE</span></div>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <div class="subtitle-1">TETANUS</div>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-menu
                        v-model="ir1_date_popup"
                        :close-on-content-click="false"
                        max-width="290"
                        >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                :value="ir.ir1_date"
                                clearable
                                label="Date*"
                                v-on="on">
                            </v-text-field>
                        </template>
                        <v-date-picker
                            v-model="ir.ir1_date"
                            @change="ir1_date_popup = false"
                        ></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Remarks"
                        required
                        v-model="ir.ir1_remarks"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <div class="subtitle-1">PNEUMONIA</div>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-menu
                        v-model="ir2_date_popup"
                        :close-on-content-click="false"
                        max-width="290"
                        >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                :value="ir.ir2_date"
                                clearable
                                label="Date*"
                                v-on="on">
                            </v-text-field>
                        </template>
                        <v-date-picker
                            v-model="ir.ir2_date"
                            @change="ir2_date_popup = false"
                        ></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Remarks"
                        required
                        v-model="ir.ir2_remarks"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <div class="subtitle-1">INFLUENZA</div>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-menu
                        v-model="ir3_date_popup"
                        :close-on-content-click="false"
                        max-width="290"
                        >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                :value="ir.ir3_date"
                                clearable
                                label="Date*"
                                v-on="on">
                            </v-text-field>
                        </template>
                        <v-date-picker
                            v-model="ir.ir3_date"
                            @change="ir3_date_popup = false"
                        ></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Remarks"
                        required
                        v-model="ir.ir3_remarks"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <div class="subtitle-1">OTHERS (specify)</div>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-menu
                        v-model="ir4_date_popup"
                        :close-on-content-click="false"
                        max-width="290"
                        >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                :value="ir.ir4_date"
                                clearable
                                label="Date*"
                                v-on="on">
                            </v-text-field>
                        </template>
                        <v-date-picker
                            v-model="ir.ir4_date"
                            @change="ir4_date_popup = false"
                        ></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field 
                        label="Remarks"
                        required
                        v-model="ir.ir4_remarks"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'ir' ],
    data(){
        return {
            ir1_date_popup: false,
            ir2_date_popup: false,
            ir3_date_popup: false,
            ir4_date_popup: false,
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>