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
                                        :items="clients"
                                        label="Patient"
                                        item-text="patient_name"
                                        item-value="document_id"
                                        v-model="cid"
                                        @change="select_client"
                                        return-object
                                        >
                                        <template slot="selection" slot-scope="data">
                                            {{data.item.patient_name}}
                                        </template>    
                                        <template slot="item" slot-scope="data">
                                            {{data.item.patient_name}}
                                        </template>
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-autocomplete
                                        :items="professionals"
                                        label="Health Care Professional"
                                        item-text="fullname"
                                        item-value="id"
                                        v-model="pid"
                                        @change="select_professional"
                                        return-object
                                        >
                                        <template slot="selection" slot-scope="data">
                                            {{data.item.first_name}} {{data.item.last_name}} - {{data.item.profession}}
                                        </template>    
                                        <template slot="item" slot-scope="data">
                                            {{data.item.first_name}} {{data.item.last_name}} - {{data.item.profession}}
                                        </template>
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-menu
                                        v-model="visit_date_popup_start"
                                        :close-on-content-click="false"
                                        max-width="290"
                                        >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                :value="visit.visit_date_start"
                                                clearable
                                                label="Date From"
                                                readonly
                                                v-on="on">
                                            </v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="visit.visit_date_start"
                                            @change="visit_date_popup_start = false"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-menu
                                        v-model="visit_date_popup_end"
                                        :close-on-content-click="false"
                                        max-width="290"
                                        >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                :value="visit.visit_date_end"
                                                clearable
                                                label="Date To"
                                                readonly
                                                v-on="on">
                                            </v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="visit.visit_date_end"
                                            @change="visit_date_popup_end = false"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-menu
                                        ref="menu"
                                        v-model="menu2"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="time"
                                        transition="scale-transition"
                                        offset-y
                                        max-width="280px"
                                        min-width="280px"
                                        >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                        v-model="time"
                                        label="Time-In"
                                        readonly
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-time-picker
                                        v-if="menu2"
                                        v-model="time"
                                        format="24hr"
                                        full-width
                                        @click:minute="$refs.menu.save(time)"
                                    ></v-time-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-menu
                                        ref="menu"
                                        v-model="menu2"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="time"
                                        transition="scale-transition"
                                        offset-y
                                        max-width="280px"
                                        min-width="280px"
                                        >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                        v-model="time"
                                        label="Time-Out"
                                        readonly
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-time-picker
                                        v-if="menu2"
                                        v-model="time"
                                        format="24hr"
                                        full-width
                                        @click:minute="$refs.menu.save(time)"
                                    ></v-time-picker>
                                    </v-menu>
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
    props: [ 'professional', 'professional_id', 'client', 'client_id' ],
    data() {
        return {
            time: null,
            menu2: false,
            modal2: false,
            valid: true,
            dialog: false,
            overlay: false,
            snackbar: false,
            notification: '',
            visit_date_popup_start: false,
            visit_date_popup_end: false,
            visit: {},
            action: 'create',
            components: [
          'Autocompletes', 'Comboboxes', 'Forms', 'Inputs', 'Overflow Buttons', 'Selects', 'Selection Controls', 'Sliders', 'Textareas', 'Text Fields',
        ],
        }
    },
    mounted() {
        this.$store.dispatch("Professional/getProfessionals")
        this.$store.dispatch("Client/getClients")
    },
    computed: {
        ...mapGetters({
            professionals: 'Professional/professionals',
            clients: 'Client/clients',
        }),
        pid(){
            return this.professional_id
        },
        cid(){
            return this.client_id
        }
        // computedVisitDateFormattedMomentjs(){
        //     return this.visit_date ? moment(this.visit_date).format('YYYY-MM-DD') : ''
        // },
    },
    methods: {
        select_professional(){
            console.log(this.visit.professional)
        },
        select_client(){
            console.log(this.visit.client)
        },
        popup_create_visit(){
            this.dialog = true
        },
        popup_close(){
            this.dialog = false
        },
        process_save(){

        },
    }
}
</script>