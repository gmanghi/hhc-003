<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" scrollable max-width="90%">
            <template v-slot:activator="{ on }">
                <v-btn
                    fixed
                    dark
                    fab
                    bottom
                    right
                    color="pink"
                    @click="popup_create_visit">
                    <v-icon small>mdi-plus</v-icon>
                </v-btn>
            </template>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                <v-card>
                    <v-card-title>
                        <span class="headline">Schedule visit</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-autocomplete
                                        :rules="requiredStringRules"
                                        :items="clients"
                                        :readonly="!!cid"
                                        label="Patient"
                                        item-text="patient_name"
                                        item-value="document_id"
                                        v-model="client_id"
                                        @change="select_client"
                                        return-object
                                        >
                                        <!-- <template slot="selection" slot-scope="data">
                                            {{data.item.patient_name}}
                                        </template>    
                                        <template slot="item" slot-scope="data">
                                            {{data.item.patient_name}}
                                        </template> -->
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-autocomplete
                                        :rules="requiredStringRules"
                                        :items="professionals"
                                        :readonly="!!pid"
                                        label="Health Care Professional"
                                        item-text="fullname"
                                        item-value="id"
                                        v-model="professional_id"
                                        @change="select_professional"
                                        return-object
                                        >
                                        <!-- <template slot="selection" slot-scope="data">
                                            {{data.item.first_name}} {{data.item.last_name}} - {{data.item.profession}}
                                        </template>    
                                        <template slot="item" slot-scope="data">
                                            {{data.item.first_name}} {{data.item.last_name}} - {{data.item.profession}}
                                        </template> -->
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-menu
                                        ref="date_start"
                                        v-model="visit_date_popup_start"
                                        :close-on-content-click="false"
                                        :return-value.sync="visit_date_start"
                                        max-width="290"
                                        >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                v-model="visit_date_start"
                                                clearable
                                                label="Schedule From"
                                                readonly
                                                v-on="on">
                                            </v-text-field>
                                        </template>
                                        <v-date-picker
                                            :min="visit_date_start_min"
                                            v-model="visit_date_start"
                                            @change="$refs.date_start.save(visit_date_start)"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-menu
                                        ref="date_until"
                                        v-model="visit_date_popup_until"
                                        :close-on-content-click="false"
                                        :return-value.sync="visit_date_until"
                                        max-width="290"
                                        >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                v-model="visit_date_until"
                                                clearable
                                                label="Schedule Until"
                                                readonly
                                                v-on="on">
                                            </v-text-field>
                                        </template>
                                        <v-date-picker
                                            :min="visit_date_until_min"
                                            v-model="visit_date_until"
                                            @change="$refs.date_until.save(visit_date_until)"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" sm="12" md="4">
                                    <div class="text-left">
                                        <span class="header">Preset Shifts</span>
                                        <v-btn class="ma-2" tile color="dark" @click="set_shift('AM')">
                                            <v-icon left>mdi-white-balance-sunny</v-icon> AM
                                        </v-btn>
                                        <v-btn class="ma-2" tile color="dark" @click="set_shift('PM')">
                                            <v-icon left>mdi-moon-waxing-crescent</v-icon> PM
                                        </v-btn>
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-menu
                                        ref="time_in"
                                        v-model="visit_time_popup_start"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="shift_time_start"
                                        transition="scale-transition"
                                        offset-y
                                        max-width="280px"
                                        min-width="280px"
                                        >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                            :rules="requiredStringRules"
                                            v-model="shift_time_start"
                                            label="Time-In"
                                            readonly
                                            v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-time-picker
                                            v-if="visit_time_popup_start"
                                            v-model="shift_time_start"
                                            format="24hr"
                                            full-width
                                            @click:minute="$refs.time_in.save(shift_time_start)"
                                        ></v-time-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field 
                                        :rules="requiredStringRules"
                                        label="Required number of working hours" 
                                        v-model="required_number_of_hours" 
                                        type="number"
                                        required>
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="popup_close">Close</v-btn>
                        <v-btn color="blue darken-1" v-if="action === 'create'" text @click="process_save">Save</v-btn>
                        <v-btn color="blue darken-1" v-if="action === 'update'" text @click="process_update">Update</v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>
        <v-overlay :value="overlay" z-index="202">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        <v-snackbar
            v-model="snackbar"
            :multi-line="true">
            {{ notification }}
            <v-btn
                color="blue"
                text
                @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-row>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
export default {
    props: [ 'professional', 'prop_professional_id', 'client', 'prop_client_id' ],
    data() {
        return {
            requiredStringRules: [v => !!v || 'Field is required'],
            toggle_none: false,
            valid: true,
            dialog: false,
            overlay: false,
            snackbar: false,
            notification: '',
            visit_date_start: '',
            visit_date_until: '',
            shift_time_start: '',
            required_number_of_hours: 12,
            visit_date_popup_start: false,
            visit_date_popup_until: false,
            visit_time_popup_start: false,
            visit_time_popup_end: false,
            visit: {},
            action: 'create',
            client_object: {},
            client_id: '',
            patient_name: '',
            professional_id: '',
            professional_name: '',
        }
    },
    mounted() {
        this.$store.dispatch("Professional/getProfessionals")
        this.$store.dispatch("Client/getClients")

        // Set default date on mount
        let today = new Date()
        this.visit_date_start = new Date(today).toISOString().substr(0, 10)
        this.visit_date_until = new Date(today).toISOString().substr(0, 10)
    },
    watch: {
        visit_date_start: function(value){
            let start = new Date(value)
            let until = new Date(this.visit_date_until)
            if( start > until ){
                this.visit_date_until = start.toISOString().substr(0, 10)
            }
        }
    },
    computed: {
        ...mapGetters({
            professionals: 'Professional/professionals',
            clients: 'Client/clients',
        }),
        visit_date_start_min(){
            let today = new Date()
            return today.toISOString().substr(0, 10)
        },
        visit_date_until_min(){
            return this.visit_date_start
        },
        pid(){
            if(!!this.prop_professional_id) {
                this.professional_id = this.prop_professional_id
            }
            return this.prop_professional_id
        },
        cid(){
            if(!!this.prop_client_id) {
                this.client_id = this.prop_client_id
            }
            return this.prop_client_id
        },
    },
    methods: {
        set_shift(shift){
            if(shift == 'AM'){
                this.shift_time_start = '07:00'
            }
            if(shift == 'PM'){
                this.shift_time_start = '19:00'
            }
            this.toggle_none = false
        },
        select_professional(){
            this.professional_name = this.professional_id.first_name + ' ' + this.professional_id.last_name
            this.professional_id = this.professional_id.id
            this.patient_name = this.client.patient_name
        },
        select_client(){
            this.patient_name = this.client_id.patient_name
            this.client_id = this.client_id.document_id
            this.professional_name = this.professional.first_name + ' ' + this.professional.last_name
        },
        popup_create_visit(){
            this.dialog = true
        },
        popup_close(){
            this.dialog = false
        },
        process_save(){
            if (this.$refs.form.validate()) {
                let date_start = new Date(this.visit_date_start)
                let moment_start_object = moment(new Date(this.visit_date_start + ' ' + this.shift_time_start))

                let date_until = new Date(this.visit_date_until)
                let number_of_days = new Date(date_until.getTime() - date_start.getTime() ) / (1000 * 3600 * 24)

                for(let a = 0; a <= number_of_days; a++){
                    let moment_start_object = moment(new Date(this.visit_date_start + ' ' + this.shift_time_start))
                    moment_start_object.add(a, 'days')
                    let shift_start = moment_start_object.format('YYYY-MM-DD HH:mm')
                    console.log(shift_start)
                    moment_start_object.add(this.required_number_of_hours, 'hours')
                    let shift_end = moment_start_object.format('YYYY-MM-DD HH:mm')
                    console.log(shift_end)

                    let data = {
                        client_id: this.client_id,
                        patient_name: this.patient_name,
                        professional_id: this.professional_id,
                        professional_name: this.professional_name,
                        start: shift_start,
                        end: shift_end,
                    }
                    this.$store.commit('ClientVisits/setVisit', data)
                    this.$store.dispatch("ClientVisits/createVisit").then(function(doc){
                        console.log('saveVisit',doc)
                        parent.dialog = false
                    }).catch(function(error){
                        console.log(error)
                    })
                }
            }
        },
    }
}
</script>