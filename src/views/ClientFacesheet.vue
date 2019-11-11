<template>
    <div id="client-details">
        <h1 class="subheading grey--text">Facesheet</h1>
        <v-container>
            <ClientNavbar></ClientNavbar>
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
                                            readonly
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="3" >
                                            <v-text-field label="Client / Account Name*" v-model="client.client_account_name" readonly ></v-text-field>
                                        </v-col>
                                        <v-col cols="12"  md="3" sm="3">
                                            <v-text-field label="Position / Relationship" v-model="client.client_position_relationship" readonly></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="3" xs="2">
                                            <v-text-field label="Primary Care YES, If NO*" v-model="client.client_primary_care" readonly></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field
                                            label="Landline / Mobile Phone / Fax*"
                                            persistent-hint
                                            readonly
                                            v-model="client.client_landline_mobile_fax"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Email Address*" v-model="client.client_email" readonly></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Attending Physician*" v-model="client.client_attending_physician" readonly></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field label="Complete Address*" v-model="client.client_complete_address" readonly></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="2"  sm="3" xs="2">
                                            <v-autocomplete
                                            :items="['Mr.', 'Ms.', 'Mrs.', 'Dr.']"
                                            label="Title"
                                            v-model="client.patient_title"
                                            readonly
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" md="5" sm="3">
                                            <v-text-field label="Patient Name*" v-model="client.patient_name" readonly></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="2" sm="3">
                                            <v-text-field label="Age" v-model="client.patient_age" readonly></v-text-field>
                                        </v-col>
                                         <v-col cols="12" md="3" sm="3">
                                            <v-menu
                                                v-model="date_popup"
                                                :close-on-content-click="true"
                                                max-width="290"
                                                readonly
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
                                                    readonly
                                                ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Religion" v-model="client.patient_religion" readonly></v-text-field>
                                        </v-col>
                                         <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Nationality*" v-model="client.patient_nationality" readonly></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Landline" v-model="client.patient_landline" readonly></v-text-field>
                                        </v-col>

                                         <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Mobile Phone*" v-model="client.patient_mobile" readonly></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Email Address*" v-model="client.patient_email" readonly></v-text-field>
                                        </v-col>
                                         <v-col cols="12" md="4" sm="4">
                                            <v-text-field label="Fax" v-model="client.patient_fax" readonly></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field label="Complete Address*" v-model="client.patient_complete_address" readonly></v-text-field>
                                        </v-col>
                                    
                                        <v-col cols="12" md="12" sm="12">
                                            <v-subheader class="font-weight-bold"> REQUIREMENTS (Kindly check which service request / requirement is)</v-subheader>
                                            <v-divider></v-divider>
                                        </v-col>

                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Home Health Visit by HCP" value="home_health_visit_hcp" readonly></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Registered Nurse / Caregiver Deployment" value="registered_nurse" readonly></v-checkbox>
                                         </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Laboratory / Radiology" value="lab" readonly></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Purchase / Rental of Medicine Equipment" value="purchase" readonly></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Medical Escorting" value="medical_escorting" readonly></v-checkbox>
                                         </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Senior Residential Facility" value="senior_residential_facility" readonly></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="Home Vaccination Program" value="home_vaccination" readonly></v-checkbox>
                                         </v-col>
                                       <v-col cols="12" md="6" sm="12">
                                            <v-checkbox class="ma-0 pa-0" label="MDeploy" value="mdeploy" readonly></v-checkbox>
                                        </v-col>

                                        <v-col cols="12" md="12" sm="12">
                                            <v-subheader class="font-weight-bold">Mode of Payment (Kindly check the appropriate box)</v-subheader>
                                            <v-divider></v-divider>
                                        </v-col>

                                        <v-row class="mb-12" no-gutters>                                              
                                            <v-col cols="12" md="6" sm="12">
                                                <v-checkbox class="ma-0 pa-0" label="Cash" value="" readonly></v-checkbox>
                                                    <v-col md="11" offset-md="1">
                                                        <v-checkbox class="ma-0 pa-0" label="Will bring in the office" value="" readonly></v-checkbox>
                                                        <v-checkbox class="ma-0 pa-0" label="For Pick up (Minimum of P10,000.00)" value="" readonly></v-checkbox>
                                                    </v-col>
                                            </v-col>
                                            <v-col cols="12" md="6" sm="12">
                                                <v-checkbox  class="ma-0 pa-0" label="Credit Card (In HHC Office Only)" value="" readonly></v-checkbox>
                                                    <v-col md="11" offset-md="1">
                                                            <v-text-field class="ma-0 pa-0" label="Bank Card" readonly></v-text-field>
                                                            <v-text-field class="ma-0 pa-0" label="Card No." readonly></v-text-field>
                                                    </v-col>
                                            </v-col>
                                            
                                        </v-row>
                                        <v-row class="mb-12" no-gutters >
                                            <v-col cols="12" md="6" sm="12">
                                                <v-checkbox class="ma-0 pa-0" v-model="selected" label="Check" value="" readonly></v-checkbox>
                                                    <v-col md="11" offset-md="1">
                                                            <v-checkbox class="ma-0 pa-0" label="Will bring in the office" value="" readonly></v-checkbox>
                                                            <v-checkbox class="ma-0 pa-0" label="For Pick up (Minimum of P10,000.00)" value="" readonly></v-checkbox>
                                                            <v-checkbox class="ma-0 pa-0"
                                                                label="Will Deposit (Please E-mail deposit slip to casemanagement@homehealthcare.com.ph or Fax to Tel.No.02-791-86-80 w/ Patient's Name)" 
                                                                value=""
                                                                readonly>
                                                            </v-checkbox>
                                                    </v-col>
                                            </v-col>
                                            
                                            <v-col cols="12" md="6" sm="12">
                                                <v-checkbox class="ma-0 pa-0" label="Paypal (accounts@homehealthcare.com.ph)" value="" readonly></v-checkbox>
                                                <v-checkbox class="ma-0 pa-0" label="GCash" value="" readonly></v-checkbox>
                                                <v-checkbox class="ma-0 pa-0" label="Bank Transfer / Credit Memo / Remittance (Please ask for HHCI / HHCPI Bank Acct.No.)" value="" readonly></v-checkbox>
                                            </v-col>
                                        </v-row>

                                        <v-col cols="12" md="12" sm="12">
                                            <v-divider></v-divider>
                                        </v-col>

                                        <v-col cols="12" md="6" sm="12">
                                            <v-text-field  class="ma-0 pa-0" label="Bank Name:" hint="Bank Name" readonly></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6" sm="12">
                                            <v-text-field class="ma-0 pa-0" label="Branch:" hint="Branch" readonly></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="6" sm="12">
                                            <v-subheader class="font-weight-bold">DATA GATHERED BY:</v-subheader>
                                            <v-text-field label="Name and Signature:" hint="" readonly></v-text-field>
                                            <v-text-field label="Date / Time Recieved:" hint="" readonly></v-text-field>
                                        </v-col>


                                        <v-col cols="12" md="6" sm="12">
                                            <v-subheader class="font-weight-bold">ENDORSED FOR ACTION TO:</v-subheader>
                                            <v-text-field label="Name and Signature:"  hint="" readonly></v-text-field>
                                            <v-text-field label="Date / Time Recieved:"  hint="" readonly></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="12" sm="12">
                                            <v-textarea label="ACTION TAKEN:" auto-grow outlined rows="3" row-height="30" value="" readonly></v-textarea>
                                        </v-col>

                                        <v-col cols="12" md="12" sm="12">
                                            <v-subheader class="font-weight-bold">SURVEY: How did you get to know Home Health Care?</v-subheader>
                                            <v-divider></v-divider>
                                        </v-col>

                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="Friends" value="friends" readonly></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-row align="">
                                                <v-checkbox class=""></v-checkbox>
                                                <v-text-field label="Referal By:" readonly></v-text-field>
                                            </v-row>
                                        </v-col>    

                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="Print Ad Rx Pinoy, Yellow Page, Etc." value="print_ad" readonly></v-checkbox>
                                        </v-col>

                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="Flyers / Banners" value="flyers" readonly></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="Newspaper" value="newspaper" readonly></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-row align="">
                                                <v-checkbox class=""></v-checkbox>
                                                <v-text-field label="Others, pls. specify" readonly></v-text-field>
                                            </v-row>
                                        </v-col> 

                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="TV / Radio Advertisement" value="advertisement" readonly></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-checkbox label="Website:" value="website" readonly></v-checkbox>
                                        </v-col>

                                        <v-col cols="12" md="2" sm="3" xs="2">
                                            <v-autocomplete
                                            :items="['New', 'Pending', 'Verified']"
                                            label="Status"
                                            v-model="client.client_status"
                                            readonly
                                            ></v-autocomplete>
                                        </v-col>


                                    </v-row>
                                </v-container>
                            </v-card-text>
                        </v-card>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClientNavbar from '@/components/ClientNavbar'
export default {
    components: {
        ClientNavbar
    },
    beforeRouteUpdate (to, from, next) {
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClient")
        next();
    },
    mounted() {
        this.$store.commit('Client/setDocumentId', this.$route.params.id)
        this.$store.dispatch("Client/getClient");
    },
    computed: {
        ...mapGetters({
            client: 'Client/client'
        })
    },
}
</script>