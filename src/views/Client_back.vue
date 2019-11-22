<template>
    <div id="clients">
        <h1 class="subheading grey--text">Clients Old</h1>

        <v-container class="my-5">
            <v-card flat v-for="project in projects" :key="project.id">
                <v-layout row wrap :class="`pa-3 project ${project.primary_care}`">
                    <v-flex xs12 sm2 md1 lg1>
                        <div class="caption grey--text">Title</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md5 lg3>
                        <div class="caption grey--text">Client/Account Name</div>
                        <div>{{ project.account_name }}</div>
                    </v-flex>
                    <v-flex xs12 sm3 md3 lg2>
                        <div class="caption grey--text">Position/Relationship</div>
                        <div>{{ project.relationship }}</div>
                    </v-flex>
                    <v-flex xs12 sm3 md3 lg1>
                        <div class="caption grey--text">Primary Care</div>
                        <div>{{ project.primary_care }}</div>
                    </v-flex>
                
                    <v-flex xs12 sm2 md4 lg1>
                        <div class="caption grey--text">Landline</div>
                        <div>{{ project.landline }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md4 lg2>
                        <div class="caption grey--text">Email Adrress</div>
                        <div>{{ project.email_address }}</div>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg2>
                        <div class="caption grey--text">Attending Physician</div>
                        <div>{{ project.attending_physician }}</div>
                    </v-flex>

                    <v-flex xs12 sm12 md12>
                        <div class="caption grey--text">Complete Address</div>
                        <div>{{ project.complete_address }}</div>
                    </v-flex>

                    <v-flex xs12 sm2 md1 lg1>
                        <div class="caption grey--text">Title</div>
                        <div>{{ project.patient_title }}</div>
                    </v-flex>
                    <v-flex xs12 sm5 md5 lg3>
                        <div class="caption grey--text">Patient Name</div>
                        <div>{{ project.patient_name }}</div>
                    </v-flex>
                    <v-flex xs12 sm2 md1 lg2>
                        <div class="caption grey--text">Age</div>
                        <div>{{ project.age }}</div>
                    </v-flex>
                    <v-flex xs12 sm3 md5 lg2>
                        <div class="caption grey--text">Birthday</div>
                        <div>{{ project.birthday }}</div>
                    </v-flex>
                
                    <v-flex xs12 sm4 md4 lg2 class="d-lg-none">
                            <div class="caption grey--text">Email Address</div>
                            <div>{{ project.patient_email }}</div>
                    </v-flex>

                    <v-flex xs12 sm4 md4 lg2>
                        <div class="caption grey--text">Religion</div>
                        <div>{{ project.religion }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md4 lg2>
                        <div class="caption grey--text">Nationality</div>
                        <div>{{ project.nationality }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md4 lg4 class="d-none d-lg-block">
                            <div class="caption grey--text">Email Address</div>
                            <div>{{ project.patient_email }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md2 lg2>
                        <div class="caption grey--text">Landline</div>
                        <div>{{ project.patient_landline }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md2 lg4>
                        <div class="caption grey--text">Mobile Phone</div>
                        <div>{{ project.mobile }}</div>
                    </v-flex>
                    <v-flex xs12 sm4 md2 lg2>
                        <div class="caption grey--text">Fax</div>
                        <div>{{ project.fax }}</div>
                    </v-flex>

                    <v-flex xs12 sm12 md12>
                        <div class="caption grey--text">Complete Address</div>
                        <div>{{ project.patient_address }}</div>
                    </v-flex>
                    <v-flex xs12 sm12 md12>
                        <div class="text-right">
                            <v-btn class="ma-2" outlined color="primary" to="/client/1/requests"><v-icon>mdi-format-list-bulleted-square</v-icon>Create a request</v-btn>
                            <v-btn class="ma-2" outlined color="success" to="/clients"><v-icon>mdi-eye</v-icon>View details</v-btn>
                        </div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>
            <!-- Popup Start -->
            <v-row justify="center">
                <v-dialog v-model="popup" persistent max-width="1200px">
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

                                        <!-- <v-col cols="12" md="4" sm="4">
                                            <v-autocomplete
                                            :items="['Home Health Visit by HCP', 'Registered Nurse /  Caregiver Deployment', 'Laboratory / Radiology', 'Purchase / Rental of Medicine Equipment']"
                                            label="Case Management"
                                            multiple
                                            v-model="client.patient_case_management"
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-autocomplete
                                            :items="['Ambulatory Wellness Clinic', 'Caregiver Training Module', 'Senior Residential Facility']"
                                            label=""
                                            multiple
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="4">
                                            <v-autocomplete
                                            :items="['Walk-in', 'Home Service', 'Corporate', 'Delivery']"
                                            label="Home Vaccination Program"
                                            multiple
                                            v-model="client.patient_home_vaccination_program"
                                            ></v-autocomplete>
                                        </v-col> -->
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
                                <v-btn color="blue darken-1" v-if="action === 'create'" text @click="saveClient">Save</v-btn>
                                <v-btn color="blue darken-1" v-if="action === 'update'" text @click="updateClient">Update</v-btn>
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
            action: 'create',
            projects: [
                { id:1, title: 'Ms.', account_name: 'Lucille Teves', relationship: 'Mother', primary_care: 'Yes', landline: '123-09-98', email_address: 'lucilleteves@email.com', attending_physician: 'Vicky Belo',
                    complete_address: "Unit 26 #67 Col. Bravo Street Central Signal Village Taguig City, Philippines",
                    patient_title: "Mrs.", patient_name: "Luzviminda Quero Quero", age: "40", birthday: "January 12, 1987", religion: "Roman Catholic", nationality: "Filipino",
                    patient_landline: "675-98-67", mobile: "09876654321", patient_email: "luzyvi@mail.com.ph", fax: "467",
                    patient_address: "Unit 456 #67253 Maginhawa Street Bangkal Makati City, Philippines"
                },
                { id:2, title: 'Ms.', account_name: 'Lucille Teves', relationship: 'Mother', primary_care: 'No', landline: '123-09-98', email_address: 'lucilleteves@email.com', attending_physician: 'Vicky Belo',
                    complete_address: "Unit 456 #67253 Maginhawa Street Bangkal Makati City, Philippines",
                    patient_title: "Mrs.", patient_name: "Luzviminda Quero Quero", age: "40", birthday: "January 12, 1987", religion: "Roman Catholic", nationality: "Filipino",
                    patient_landline: "675-98-67", mobile: "09876654321", patient_email: "luzyvi@mail.com.ph", fax: "467",
                    patient_address: "Unit 26 #67 Col. Bravo Street Central Signal Village Taguig City, Philippines"
                },
                { id:3, title: 'Ms.', account_name: 'Lucille Teves', relationship: 'Mother', primary_care: 'Maybe', landline: '123-09-98', email_address: 'lucilleteves@email.com', attending_physician: 'Vicky Belo',
                    complete_address: "Unit 456 #67253 Maginhawa Street Bangkal Makati City, Philippines",
                    patient_title: "Mrs.", patient_name: "Luzviminda Quero Quero", age: "40", birthday: "January 12, 1987", religion: "Roman Catholic", nationality: "Filipino",
                    patient_landline: "675-98-67", mobile: "09876654321", patient_email: "luzyvi@mail.com.ph", fax: "467",
                    patient_address: "Unit 26 #67 Col. Bravo Street Central Signal Village Taguig City, Philippines"
                }

            ]
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

<style>

.project.Yes{
    border-left: 4px solid #3cd1c2;
}
.project.No{
    border-left: 4px solid orange;
}
.project.Maybe{
    border-left: 4px solid blue;
}

</style>
