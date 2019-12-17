<template>
    <div id="client-details">
        <h1 class="subheading grey--text">Facesheet</h1>
        <v-container>
            <ClientNavbar></ClientNavbar>
            <v-card>
                
                <v-card-text>
                    <v-row>
                        <!-- <v-col cols="12" md="12" sm="12" xs="12">
                            <div class="text-right">
                                <v-btn class="ma-2" tile outlined color="success" @click="edit">
                                    <v-icon left>mdi-pencil</v-icon> Edit Details
                                </v-btn>
                            </div>
                        </v-col> -->
                        <v-col cols="12" md="2" sm="3" xs="2">
                            <v-select
                            :items="['Mr.', 'Ms.', 'Mrs.', 'Dr.']"
                            label="Title"
                            v-model="client.client_title"
                            readonly
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="4" sm="3" >
                            <v-text-field label="Client / Account Name" v-model="client.client_account_name" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12"  md="3" sm="3">
                            <v-text-field label="Position / Relationship" v-model="client.client_position_relationship" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3" sm="3" xs="2">
                            <v-text-field label="Primary Care YES, If NO" v-model="client.client_primary_care" readonly></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4" sm="4">
                            <v-text-field
                            label="Landline / Mobile Phone / Fax"
                            readonly
                            v-model="client.client_landline_mobile_fax"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="4">
                            <v-text-field label="Email Address" v-model="client.client_email" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="4">
                            <v-text-field label="Attending Physician" v-model="client.client_attending_physician" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                            <v-text-field label="Complete Address" v-model="client.client_complete_address" readonly></v-text-field>
                        </v-col>

                        <v-col cols="12" md="2"  sm="3" xs="2">
                            <v-select
                            :items="['Mr.', 'Ms.', 'Mrs.', 'Dr.']"
                            label="Title"
                            v-model="client.patient_title"
                            readonly
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="5" sm="3">
                            <v-text-field label="Patient Name" v-model="client.patient_name" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="2" sm="3">
                            <v-text-field label="Age" v-model="client.patient_age" readonly></v-text-field>
                        </v-col>
                            <v-col cols="12" md="3" sm="3">
                            <v-menu
                                v-model="date_popup"
                                :close-on-content-click="true"
                                max-width="290"
                                >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        :value="computedDateFormattedMomentjs"
                                        clearable
                                        label="Birthdate"
                                        readonly
                                        v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="client.patient_birthdate"
                                    @change="date_popup = false"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" md="4" sm="4">
                            <v-text-field label="Religion" v-model="client.patient_religion" readonly></v-text-field>
                        </v-col>
                            <v-col cols="12" md="4" sm="4">
                            <v-text-field label="Nationality" v-model="client.patient_nationality" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="4">
                            <v-text-field label="Landline" v-model="client.patient_landline" readonly></v-text-field>
                        </v-col>

                            <v-col cols="12" md="4" sm="4">
                            <v-text-field label="Mobile Phone" v-model="client.patient_mobile" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="4">
                            <v-text-field label="Email Address" v-model="client.patient_email" readonly></v-text-field>
                        </v-col>
                            <v-col cols="12" md="4" sm="4">
                            <v-text-field label="Fax" v-model="client.patient_fax" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                            <v-text-field label="Complete Address" v-model="client.patient_complete_address" readonly></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12" md="12">
                            <v-combobox
                                v-model="client.requirements"
                                :items="['Home Health Care Visit',
                                        'Home Care',
                                        'Laboratory / Radiology',
                                        'Purchase and/or Rental of Medical Equipment',
                                        'Medical Escorting',
                                        'Long Term Care Placement',
                                        'Home Vaccination Program',
                                        'MDeploy']"
                                label="REQUIREMENTS (Kindly check which service request / requirement is)"
                                multiple    
                                chips
                                readonly
                            ></v-combobox>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                            <v-textarea label="Requirements Notes / Remarks:" auto-grow outlined rows="3" row-height="30" v-model="client.notes_remarks" readonly></v-textarea>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                            <v-flex :inset="false" class="font-weight-bold">Mode of Payment (Kindly check the appropriate box)</v-flex>
                            <v-divider></v-divider>
                        </v-col>

                        <v-col cols="12" xs="12" sm="12" md="12">
                            <v-combobox
                                v-model="client.cash"
                                :items="['Will bring in the office',
                                        'For Pick up (Minimum of P10,000.00) billing']"
                                label="Cash"
                                multiple    
                                chips
                                readonly
                            ></v-combobox>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12">
                            <v-combobox
                                v-model="client.check"
                                :items="['Will bring in the office',
                                        'For Pick up (Minimum of P10,000.00)',
                                        'Will Deposit (Please E-mail deposit slip to billing2@homehealthcareph.com or Fax 7958-0718(602) with Patient\'s Name)']"
                                label="Check"
                                multiple    
                                chips
                                readonly
                            ></v-combobox>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12">
                            <v-combobox
                                v-model="client.online"
                                :items="['Paypal (accounts@homehealthcare.com.ph)',
                                        'GCash',
                                        'Bank Transfer / Credit Memo / Remittance (Please ask for HHCI / HHCPI Bank Acct.No.)']"
                                label="Online Transaction"
                                multiple    
                                chips
                                readonly
                            ></v-combobox>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                            <v-text-field label="Credit Card (In HHC Office Only)" v-model="client.credit_card" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">
                            <v-text-field  class="ma-0 pa-0" label="Bank Name:" v-model="client.bank_name" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">
                            <v-text-field class="ma-0 pa-0" label="Branch:" v-model="client.bank_branch" readonly></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                            <v-divider></v-divider>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">
                            <v-flex class="font-weight-bold">DATA GATHERED BY:</v-flex>
                            <v-text-field label="Name and Signature:" v-model="client.gathered_by" readonly></v-text-field>
                            <v-text-field label="Date / Time Recieved:" v-model="client.gathered_when" readonly></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6" sm="12">
                            <v-flex class="font-weight-bold">ENDORSED FOR ACTION TO:</v-flex>
                            <v-text-field label="Name and Signature:" v-model="client.endorsed_action_to" readonly></v-text-field>
                            <v-text-field label="Date / Time Recieved:"  v-model="client.endorsed_action_when" readonly></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12" sm="12">
                            <v-textarea label="ACTION TAKEN:" auto-grow outlined rows="3" row-height="30" v-model="client.action_taken" readonly></v-textarea>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                            <v-divider></v-divider>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12">
                            <v-combobox
                                v-model="client.survey"
                                :items="['Friends',
                                        'Flyers / Banners',
                                        'Newspaper',
                                        'TV / Radio Advertisement',
                                        'Print Ad Rx Pinoy, Yellow Page, Etc.']"
                                label="SURVEY: How did you get to know Home Health Care?"
                                multiple    
                                chips
                                readonly
                            ></v-combobox>
                        </v-col>
                        <v-col cols="12" md="12" sm="12" xs="12">
                            <v-autocomplete
                            :items="['New', 'Pending', 'Verified']"
                            label="Status"
                            v-model="client.client_status"
                            readonly
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            <ClientAddEditForm v-bind:popup="popup" v-bind:client="client" v-bind:method="method" v-bind:document_id="document_id"></ClientAddEditForm>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import ClientNavbar from '@/components/ClientNavbar'
import ClientAddEditForm from '../components/ClientAddEditForm'
export default {
    data() {
        return {
            // valid: true,
            date_popup: false,
            popup: false,
            // overlay: false,
            // snackbar: false,
            // notification: '',
            method: 'update',
            document_id: '',
            // search: '',
            // headers: [
            //     { text: 'Client/Account Name', align: 'center', sortable: true, value: 'client_account_name' },
            //     { text: 'Patient Name', align: 'center', sortable: true, value: 'patient_name' },
            //     { text: 'Email', align: 'center', value: 'client_email' },
            //     { text: 'Landline/Mobile/Fax', align: 'center', value: 'client_landline_mobile_fax' },
            //     { text: 'Status', align: 'center', value: 'client_status' },
            //     { text: 'Actions', align: 'center', value: 'actions' },
            // ],
        }
    },
    components: { ClientNavbar, ClientAddEditForm },
    beforeRouteUpdate (to, from, next) {
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClient")
        next();
    },
    mounted() {
        this.$store.commit('Client/setDocumentId', this.$route.params.id)
        this.$store.dispatch("Client/getClient");
        this.document_id = this.$route.params.id
    },
    computed: {
        ...mapGetters({
            client: 'Client/client'
        }),
        computedDateFormattedMomentjs(){
            return this.client.patient_birthdate ? moment(this.client.patient_birthdate).format('YYYY-MM-DD') : ''
        },
    },
    methods: {
        // edit(){
        //     this.popup = true
        // },
        popupOpen(){
            this.popup = true
        },
        popupClose(){
            this.popup = false
        }
    }
}
</script>