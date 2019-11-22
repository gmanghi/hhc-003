<template>
    <div id="clients">
        <h1 class="subheading grey--text">Clients/Patients</h1>

        <v-container class="my-5">
            <v-card>
                <v-card-title>
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-card-search-outline"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="clients"
                    :search="search"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-btn
                            color="blue-grey"
                            class="black--text"
                            text
                            :to="{ name: 'client_details', params: { id: item.document_id } }">
                            <v-icon dark>mdi-clipboard-list-outline</v-icon>
                        </v-btn>    
                    </template>
                </v-data-table>
            </v-card>
            <!-- Popup Start -->
            <v-row justify="center">
                <v-dialog v-model="popup" scrollable max-width="90%">
                    <template v-slot:activator="{ on }">
                        <v-btn
                            fixed
                            dark
                            fab
                            bottom
                            right
                            color="pink"
                            v-on="on">
                            <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <v-form>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Facesheet</span>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" md="2" sm="3" xs="2">
                                        <v-select
                                        :items="['Mr.', 'Ms.', 'Mrs.', 'Dr.']"
                                        label="Title"
                                        v-model="client.client_title"
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" md="4" sm="3" >
                                        <v-text-field label="Client / Account Name*" v-model="client.client_account_name" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12"  md="3" sm="3">
                                        <v-text-field label="Position / Relationship" v-model="client.client_position_relationship" hint="example of helper text only on focus"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3" sm="3" xs="2">
                                        <v-text-field label="Primary Care YES, If NO*" v-model="client.client_primary_care" required></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4" sm="4">
                                        <v-text-field
                                        label="Landline / Mobile Phone / Fax*"
                                        persistent-hint
                                        required
                                        v-model="client.client_landline_mobile_fax"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Email Address*" v-model="client.client_email" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Attending Physician*" v-model="client.client_attending_physician" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-text-field label="Complete Address*" v-model="client.client_complete_address" required></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="2"  sm="3" xs="2">
                                        <v-select
                                        :items="['Mr.', 'Ms.', 'Mrs.', 'Dr.']"
                                        label="Title"
                                        v-model="client.patient_title"
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" md="5" sm="3">
                                        <v-text-field label="Patient Name*" v-model="client.patient_name" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="2" sm="3">
                                        <v-text-field label="Age" v-model="client.patient_age" hint="example of helper text only on focus" required></v-text-field>
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
                                                    label="Birthdate*"
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
                                        <v-text-field label="Religion" v-model="client.patient_religion" hint="example of helper text only on focus" required></v-text-field>
                                    </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Nationality*" v-model="client.patient_nationality" hint="example of helper text only on focus" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Landline" v-model="client.patient_landline" hint="example of helper text only on focus" required></v-text-field>
                                    </v-col>

                                        <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Mobile Phone*" v-model="client.patient_mobile" hint="example of helper text only on focus" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Email Address*" v-model="client.patient_email" hint="example of helper text only on focus" required></v-text-field>
                                    </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                        <v-text-field label="Fax" v-model="client.patient_fax" hint="example of helper text only on focus" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-text-field label="Complete Address*" v-model="client.patient_complete_address" required></v-text-field>
                                    </v-col>

                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="client.requirements"
                                            :items="['Home Health Visit by HCP',
                                                    'Registered Nurse / Caregiver Deployment',
                                                    'Laboratory / Radiology',
                                                    'Purchase / Rental of Medicine Equipment',
                                                    'Medical Escorting',
                                                    'Senior Residential Facility',
                                                    'Home Vaccination Program',
                                                    'MDeploy']"
                                            label="REQUIREMENTS (Kindly check which service request / requirement is)"
                                            multiple    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                
                                    <v-col cols="12" md="12" sm="12">
                                        <v-flex :inset="false" class="font-weight-bold">Mode of Payment (Kindly check the appropriate box)</v-flex>
                                        <v-divider></v-divider>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="client.cash"
                                            :items="['Will bring in the office',
                                                    'For Pick up (Minimum of P10,000.00)']"
                                            label="Cash"
                                            multiple    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" xs="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="client.check"
                                            :items="['Will bring in the office',
                                                    'For Pick up (Minimum of P10,000.00)',
                                                    'Will Deposit (Please E-mail deposit slip to casemanagement@homehealthcare.com.ph or Fax to Tel.No.02-791-86-80 w/ Patients Name)']"
                                            label="Check"
                                            multiple    
                                            chips
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
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-text-field label="Credit Card (In HHC Office Only)" v-model="client.credit_card" hint="Bank Card/Card No." presistent-hint></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Bank Name:" v-model="client.bank_name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-text-field label="Branch:" v-model="client.bank_branch"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-divider></v-divider>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                        <v-flex class="font-weight-bold">DATA GATHERED BY:</v-flex>
                                        <v-text-field label="Name and Signature:" v-model="client.gathered_by"></v-text-field>
                                        <v-text-field label="Date / Time Recieved:" v-model="client.gathered_when"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="6" sm="12">
                                        <v-flex class="font-weight-bold">ENDORSED FOR ACTION TO:</v-flex>
                                        <v-text-field label="Name and Signature:" v-model="client.endorsed_action_to"></v-text-field>
                                        <v-text-field label="Date / Time Recieved:" v-model="client.endorsed_action_when"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" sm="12">
                                        <v-textarea label="ACTION TAKEN:" auto-grow outlined rows="3" row-height="30" v-model="client.action_taken"></v-textarea>
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
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12" xs="12">
                                        <v-autocomplete
                                        :items="['New', 'Pending', 'Verified']"
                                        label="Status"
                                        v-model="client.client_status"
                                        ></v-autocomplete>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="popup = false">Close</v-btn>
                                <v-btn color="blue darken-1" v-if="method === 'create'" text @click="saveClient">Save</v-btn>
                                <v-btn color="blue darken-1" v-if="method === 'update'" text @click="updateClient">Update</v-btn>
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
            <!-- Popup End -->
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
    data() {
        return {
            valid: true,
            date_popup: false,
            popup: false,
            overlay: false,
            snackbar: false,
            notification: '',
            client: {},
            method: 'create',
            search: '',
            headers: [
                { text: 'Client/Account Name', align: 'center', sortable: true, value: 'client_account_name' },
                { text: 'Patient Name', align: 'center', sortable: true, value: 'patient_name' },
                { text: 'Email', align: 'center', value: 'client_email' },
                { text: 'Landline/Mobile/Fax', align: 'center', value: 'client_landline_mobile_fax' },
                { text: 'Status', align: 'center', value: 'client_status' },
                { text: 'Actions', align: 'center', value: 'actions' },
            ],
        }
    },
    beforeRouteUpdate (to, from, next) {
        this.$store.dispatch("Client/getClients")
        next();
    },
    mounted() {
        this.$store.dispatch("Client/getClients");
    },
    computed: {
        ...mapGetters({
            clients: 'Client/clients'
        }),
        computedDateFormattedMomentjs(){
            return this.client.patient_birthdate ? moment(this.client.patient_birthdate).format('YYYY-MM-DD') : ''
        },
    },
    methods: {
        viewClient(document_id){
            this.$store.commit('Client/setDocumentId', document_id)
            this.$store.dispatch("Client/getClient")
            this.professional = this.$store.getters['Client/client']
        },
        editClient(document_id){
            this.$store.commit('Client/setDocumentId', document_id)
            this.$store.dispatch("Client/getClient")
            this.professional = this.$store.getters['Professional/client']
            this.popup = true
            this.method = 'update'
            console.log(this.professional)
        },
        deleteClient(document_id){
            this.$store.commit('Client/setDocumentId', document_id)
            this.$store.dispatch("Client/deleteClient")
        },
        saveClient(){
            this.overlay = true
            const parent = this
            this.client.createdOn = new Date
            this.$store.commit('Client/setClient', this.client)
            this.$store.dispatch("Client/createClient").then(function(doc){
                console.log('saveClient',doc)
                parent.popupClose()
                // parent.popup = false
                // parent.overlay = false
            }).catch(function(error){
                parent.notification = error
                parent.snackbar = true
                console.log(error)
            })
            
        },
        updateClient(data){
            this.overlay = true
            const parent = this
            this.$store.commit('Client/setClient', data)
            this.$store.dispatch("Client/updateClient").then(function(doc){
                console.log('updateClient',doc)
                parent.popupClose()
                // parent.popup = false
                // parent.method = 'create'
                // parent.overlay = false
            }).catch(function(error){
                parent.notification = error
                parent.snackbar = true
                console.log(error)
            })
        },
        popupClose(){
            this.method = 'create'
            this.popup = false
            this.overlay = false
        },
        popupCreateClient(){
            this.$store.dispatch("Client/clearClient")
            this.professional = this.$store.getters['Client/client']
            this.method = 'create'
            this.popup = true
        },
    }
}
</script>
