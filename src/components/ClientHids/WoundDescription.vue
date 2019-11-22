<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="6" >
                    <div class="subtitle-1">Measurements (L x W x Depth):</div>
                </v-col>
                <v-col cols="12" sm="2" md="2">
                    <v-text-field
                        v-model="wd.wdl"
                        label="(cm)"
                        suffix="x"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="2" md="2">
                    <v-text-field
                        v-model="wd.wdw"
                        label="(cm)"
                        suffix="x"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="2" md="2">
                    <v-text-field
                        v-model="wd.wdd"    
                        label="(cm)"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12" >
                    <v-text-field
                        v-model="wd.wd_location"
                        label="Location"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="12" sm="12"><v-divider></v-divider></v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-text-field
                        v-model="wd.wd_granulation"
                        label="Granulation"
                        suffix="%"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-text-field
                        v-model="wd.wd_eschar"
                        label="Eschar"
                        suffix="%"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-text-field
                        v-model="wd.wd_slough"
                        label="Slough"
                        suffix="%"
                        required>
                    </v-text-field>
                </v-col>
                 <v-col cols="12" sm="6" md="6">
                    <v-text-field
                        v-model="wd.wd_tunneling"
                        label="Tunneling"
                        suffix="o'clock"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                    <v-text-field
                        v-model="wd.wd_undermining"
                        label="Undermining"
                        suffix="o'clock"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <div class="subtitle-1">Discharge/Drainage</div>
                </v-col>
                <v-col cols="12" sm="6" md="9">
                    <v-combobox
                        v-model="wd.wd_discharge"
                        :items="['None', 'Minimal', 'Moderate', 'Excessive/Profuse']"
                        label=""
                        single    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="12" md="12" >
                    <v-text-field
                        v-model="wd.wd_color"
                        label="Color"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="12" sm="12"><v-divider></v-divider></v-col>
                <v-col cols="12" sm="4" md="4">
                    <div class="subtitle-1">Smell</div>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-combobox
                        v-model="wd.wd_smell"
                        :items="['None', 'Yes']"
                        label=""
                        single    
                        chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="4" md="4" >
                    <v-text-field
                        v-model="wd.wd_describe"
                        label="Describe"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" >
                    <div class="subtitle-1">*Documentation may include (weekly) photograph of the wound and included in the record</div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'wd' ],
    data(){
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
        }
    },
}
</script>