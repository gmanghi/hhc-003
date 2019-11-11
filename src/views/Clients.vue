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
                            class="ma-2 white--text"
                            :to="{ name: 'client_details', params: { id: item.document_id } }">
                            Details
                            <v-icon right dark>mdi-eye</v-icon>
                        </v-btn>    
                    </template>
                </v-data-table>
            </v-card>
            <!-- Popup Start -->
            <v-row justify="center">
                <v-dialog v-model="popup" persistent max-width="90%">
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
                                <span class="headline">Client</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" md="2" sm="3" xs="2">
                                            <v-autocomplete
                                            :items="['Mr.', 'Ms.', 'Mrs.', 'Dr.']"
                                            label="Title"
                                            v-model="client.client_title"
                                            ></v-autocomplete>
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
                                            <v-autocomplete
                                            :items="['Mr.', 'Ms.', 'Mrs.', 'Dr.']"
                                            label="Title"
                                            v-model="client.patient_title"
                                            ></v-autocomplete>
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
                                    
                                        <v-col cols="12" md="12" sm="12">
                                            <v-subheader class="font-weight-bold"> REQUIREMENTS (Kindly check which service request / requirement is)</v-subheader>
                                            <v-divider></v-divider>
                                        </v-col>

                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Home Health Visit by HCP" value="home_health_visit_hcp"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Registered Nurse / Caregiver Deployment" value="registered_nurse"></v-checkbox>
                                         </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Laboratory / Radiology" value="lab"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Purchase / Rental of Medicine Equipment" value="purchase"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Medical Escorting" value="medical_escorting"></v-checkbox>
                                         </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Senior Residential Facility" value="senior_residential_facility"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Home Vaccination Program" value="home_vaccination"></v-checkbox>
                                         </v-col>
                                       <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="MDeploy" value="mdeploy"></v-checkbox>
                                        </v-col>

                                        <v-col cols="12" md="12" sm="12">
                                            <v-subheader class="font-weight-bold">Mode of Payment (Kindly check the appropriate box)</v-subheader>
                                            <v-divider></v-divider>
                                        </v-col>

                                        <v-row class="mb-12" no-gutters>                                              
                                            <v-col cols="12" md="6" sm="12">
                                                <v-checkbox class="ma-0 pa-0" label="Cash" value=""></v-checkbox>
                                                    <v-col md="11" offset-md="1">
                                                        <v-checkbox class="ma-0 pa-0" label="Will bring in the office" value=""></v-checkbox>
                                                        <v-checkbox class="ma-0 pa-0" label="For Pick up (Minimum of P10,000.00)" value=""></v-checkbox>
                                                    </v-col>
                                            </v-col>
                                            <v-col cols="12" md="6" sm="12">
                                                <v-checkbox  class="ma-0 pa-0" label="Credit Card (In HHC Office Only)" value=""></v-checkbox>
                                                    <v-col md="11" offset-md="1">
                                                            <v-text-field class="ma-0 pa-0" label="Bank Card" hint="Bank Card" required></v-text-field>
                                                            <v-text-field class="ma-0 pa-0" label="Card No."  hint="Card No." required></v-text-field>
                                                    </v-col>
                                            </v-col>
                                            
                                        </v-row>
                                        <v-row class="mb-12" no-gutters >
                                            <v-col cols="12" md="6" sm="12">
                                                <v-checkbox class="ma-0 pa-0" v-model="selected" label="Check" value=""></v-checkbox>
                                                    <v-col md="11" offset-md="1">
                                                            <v-checkbox class="ma-0 pa-0" label="Will bring in the office" value=""></v-checkbox>
                                                            <v-checkbox class="ma-0 pa-0" label="For Pick up (Minimum of P10,000.00)" value=""></v-checkbox>
                                                            <v-checkbox class="ma-0 pa-0"
                                                                label="Will Deposit (Please E-mail deposit slip to casemanagement@homehealthcare.com.ph or Fax to Tel.No.02-791-86-80 w/ Patient's Name)" 
                                                                value="">
                                                            </v-checkbox>
                                                    </v-col>
                                            </v-col>
                                            
                                            <v-col cols="12" md="6" sm="12">
                                                <v-checkbox class="ma-0 pa-0" label="Paypal (accounts@homehealthcare.com.ph)" value=""></v-checkbox>
                                                <v-checkbox class="ma-0 pa-0" label="GCash" value=""></v-checkbox>
                                                <v-checkbox class="ma-0 pa-0" label="Bank Transfer / Credit Memo / Remittance (Please ask for HHCI / HHCPI Bank Acct.No.)" value=""></v-checkbox>
                                            </v-col>
                                        </v-row>

                                        <v-col cols="12" md="12" sm="12">
                                            <v-divider></v-divider>
                                        </v-col>

                                        <v-col cols="12" md="6" sm="12">
                                            <v-text-field  class="ma-0 pa-0" label="Bank Name:" hint="Bank Name" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-text-field class="ma-0 pa-0" label="Branch:" hint="Branch" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="6" sm="12">
                                            <v-subheader class="font-weight-bold">DATA GATHERED BY:</v-subheader>
                                            <v-text-field label="Name and Signature:" hint="" required></v-text-field>
                                            <v-text-field label="Date / Time Recieved:" hint="" required></v-text-field>
                                        </v-col>


                                        <v-col cols="12" md="6" sm="12">
                                            <v-subheader class="font-weight-bold">ENDORSED FOR ACTION TO:</v-subheader>
                                            <v-text-field label="Name and Signature:"  hint="" required></v-text-field>
                                            <v-text-field label="Date / Time Recieved:"  hint="" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="12" sm="12">
                                            <v-textarea label="ACTION TAKEN:" auto-grow outlined rows="3" row-height="30" value=""></v-textarea>
                                        </v-col>

                                        <v-col cols="12" md="12" sm="12">
                                            <v-subheader class="font-weight-bold">SURVEY: How did you get to know Home Health Care?</v-subheader>
                                            <v-divider></v-divider>
                                        </v-col>

                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="Friends" value="friends"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-row align="">
                                                <v-checkbox class=""></v-checkbox>
                                                <v-text-field label="Referal By:"></v-text-field>
                                            </v-row>
                                        </v-col>    

                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="Print Ad Rx Pinoy, Yellow Page, Etc." value="print_ad"></v-checkbox>
                                        </v-col>

                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="Flyers / Banners" value="flyers"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="Newspaper" value="newspaper"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-row align="">
                                                <v-checkbox class=""></v-checkbox>
                                                <v-text-field label="Others, pls. specify"></v-text-field>
                                            </v-row>
                                        </v-col> 

                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="TV / Radio Advertisement" value="advertisement"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="Website:" value="website"></v-checkbox>
                                        </v-col>

                                        <v-col cols="12" md="2" sm="3" xs="2">
                                            <v-autocomplete
                                            :items="['New', 'Pending', 'Verified']"
                                            label="Status"
                                            v-model="client.client_status"
                                            ></v-autocomplete>
                                        </v-col>


                                    </v-row>
                                </v-container>
                                <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="popup = false">Close</v-btn>
                                <v-btn color="blue darken-1" v-if="method === 'create'" text @click="saveClient">Save</v-btn>
                                <v-btn color="blue darken-1" v-if="method === 'update'" text @click="updateClient">Update</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-dialog>
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
            const parent = this
            this.$store.commit('Client/setClient', this.client)
            this.$store.dispatch("Client/createClient").then(function(doc){
                console.log('saveClient',doc)
                parent.popup = false
            }).catch(function(error){
                console.log(error)
            })
            
        },
        updateClient(data){
            const parent = this
            this.$store.commit('Client/setClient', data)
            this.$store.dispatch("Client/updateClient").then(function(doc){
                console.log('updateClient',doc)
                parent.popup = false
                parent.method = 'create'
            }).catch(function(error){
                console.log(error)
            })
        },
        popupClose(){
            this.method = 'create'
            this.popup = false
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
