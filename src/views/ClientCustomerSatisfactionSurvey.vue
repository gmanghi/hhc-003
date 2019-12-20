<template>
    <div id="client-hids">
        <h1 class="subheading white--text">Customer Satisfaction Survey</h1>
        <v-container>
            <ClientNavbar></ClientNavbar>
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
                    :items="customer_satisfaction_surveys"
                    :search="search"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-btn
                            color="blue-grey"
                            class="ma-2 white--text"
                            @click="edit_css(item.document_id)"
                        >
                            Edit
                            <v-icon right dark>mdi-pencil</v-icon>
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
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        >
                        <v-card>
                            <v-card-title>
                                <span class="headline">Customer Satisfaction Survey Form</span>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey0"
                                            :items="['Home Health Visits','Corporate / Community Vaccination','Case Management / Caregiver and Nursing Service','Senior Residential Facility']"
                                            label="Please put a check on the appropriate box:"
                                            multiple    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12">
                                        <span class="body-2">Home Health Care is committed to improving its services and care for our clients and patients. Your feedbck will help and guide us in sustaining and continously improving this commitment. Please take a few  minutes to answer this Customer Satisfaction Survey form (CSS)</span>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <div class="body-2"><span class="font-weight-bold">Client from Home Health Visits/Case Management/Caregiver and Nursing Services and Vaccination Services should answer items 1-5 only</span></div>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <div class="body-2">Home Health Care staff is/are:</div>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey1"
                                            :items="['Yes',
                                                    'No']"
                                            label="1. Consistent and on time"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey2"
                                            :items="['Yes',
                                                    'No']"
                                            label="2. Performed Services as stated in contract/agreement"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey3"
                                            :items="['Yes',
                                                    'No']"
                                            label="3. Knowledgeable and competent"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey4"
                                            :items="['Yes',
                                                    'No']"
                                            label="4. Explains the services related to patient care"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey5"
                                            :items="['Yes',
                                                    'No']"
                                            label="5. Respectful and courteous"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <div class="body-2"><span class="font-weight-bold">Client from Senior Residential Facility should continue to answer items 6-10</span></div>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey6"
                                            :items="['Yes',
                                                    'No']"
                                            label="6. Encourages me and my family to participate in my plan of care"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey7"
                                            :items="['Yes',
                                                    'No']"
                                            label="7. Explains and constantly updates me and my family about my plan of care"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey8"
                                            :items="['Yes',
                                                    'No']"
                                            label="8. Performs thorough physical, emotional and functional examination daily"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey9"
                                            :items="['Yes',
                                                    'No']"
                                            label="9. Frequently conducts room inspection for my safety and security"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey10"
                                            :items="['Yes',
                                                    'No']"
                                            label="10. Ensures that my medicines and food are given on time"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>

                                    <v-col cols="12"><v-divider></v-divider></v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-combobox
                                            v-model="customer_satisfaction_survey.customer_satisfaction_survey11"
                                            :items="['Yes',
                                                    'No']"
                                            label="Will you recommend Home Health Care to others?"
                                            single    
                                            chips
                                        ></v-combobox>
                                    </v-col>

                                    <v-col cols="12" md="12" sm="12">
                                        <v-textarea label="Other comments/suggestions" auto-grow outlined v-model="customer_satisfaction_survey.customer_satisfaction_survey_comments"></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="6">
                                        <v-text-field label="Signature over printed Name" v-model="customer_satisfaction_survey.customer_satisfaction_survey_name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="6">
                                        <v-menu
                                            v-model="customer_satisfaction_survey_date1"
                                            :close-on-content-click="false"
                                            max-width="290"
                                            readonly
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    :value="customer_satisfaction_survey.date1"
                                                    clearable
                                                    label="Date"
                                                    readonly
                                                    v-on="on">
                                                </v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="customer_satisfaction_survey.date1"
                                                @change="customer_satisfaction_survey_date1 = false"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <div class="body-2"><span class="font-weight-bold">If applicable</span></div>
                                    </v-col>
                                    <v-col cols="12-" md="6" sm="6">
                                        <v-text-field label="Name of Company/Organization" v-model="customer_satisfaction_survey.customer_satisfaction_survey_org"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="6">
                                        <v-menu
                                            v-model="customer_satisfaction_survey_date2"
                                            :close-on-content-click="false"
                                            max-width="290"
                                            readonly
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    :value="customer_satisfaction_survey.date2"
                                                    clearable
                                                    label="Date/time in and out"
                                                    readonly
                                                    v-on="on">
                                                </v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="customer_satisfaction_survey.date2"
                                                @change="customer_satisfaction_survey_date2 = false"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="6">
                                        <v-text-field label="Name/signature of company representative" v-model="customer_satisfaction_survey.customer_satisfaction_survey_rep"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="6">
                                        <v-text-field label="Name of healthcare professional/signature" v-model="customer_satisfaction_survey.customer_satisfaction_survey_repsign"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="popup_close">Close</v-btn>
                                <v-btn color="blue darken-1" v-if="method === 'create'" text @click="process_save">Save</v-btn>
                                <v-btn color="blue darken-1" v-if="method === 'update'" text @click="process_update">Update</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                    <v-overlay :value="overlay">
                        <v-progress-circular indeterminate size="64"></v-progress-circular>
                    </v-overlay>
                </v-dialog>
            </v-row>
            <!-- Popup End -->
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClientNavbar from '@/components/ClientNavbar'
export default {
    data(){
        return {
            customer_satisfaction_survey_date1: false,
            customer_satisfaction_survey_date2: false,
            overlay: false,
            valid: true,
            popup: false,
            search: '',
            method: 'create',
            customer_satisfaction_survey: {},
            headers: [
                { text: 'Date', align: 'center', sortable: true, value: 'createdOn' },
                { text: 'Edit', align: 'center', sortable: false, value: 'actions' },

            ],
            requiredFileRules: [v => !!v || 'Contract is required', v => !v || v.size < 2000000 || 'File size should be less than 2 MB!'],
        }
    },
    components: {
        ClientNavbar
    },
    beforeRouteUpdate (to, from, next) {
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClientCustomerSatisfactionSurveys");
        next();
    },
    mounted() {
        this.$store.commit('Client/setDocumentId', this.$route.params.id)
        this.$store.dispatch("Client/getClientCustomerSatisfactionSurveys");
    },
    computed: {
        ...mapGetters({
            customer_satisfaction_surveys: 'Client/customer_satisfaction_surveys'
        }),
    },
    methods: {
        edit_css(document_id){
            this.overlay = true
            let parent = this
            this.$store.commit('Client/setClientCustomerSatisfactionSurveyDocumentId', document_id)
            this.$store.dispatch("Client/getClientCustomerSatisfactionSurvey").then(function(doc){
                console.log(doc)
                parent.customer_satisfaction_survey = doc
                parent.popup = true
                parent.method = 'update'
                parent.overlay = false
            }).catch(function(error){
                console.log(error)
            })
        },
        process_save(){ 
            if (this.$refs.form.validate()) {
                this.overlay = true
                this.customer_satisfaction_survey.createdOn = new Date
                const data = this.customer_satisfaction_survey
                const parent = this
                this.$store.commit('Client/setClientCustomerSatisfactionSurvey', data)
                this.$store.dispatch("Client/createClientCustomerSatisfactionSurvey").then(function(doc){
                    console.log('saveClientCustomerSatisfactionSurvey',doc)
                    parent.popup = false
                    parent.customer_satisfaction_survey = {}
                    parent.overlay = false
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
        process_update(){
            if (this.$refs.form.validate()) {
                this.overlay = true
                const parent = this
                const data = this.customer_satisfaction_survey
                this.$store.commit('Client/setClientCustomerSatisfactionSurvey', data)
                this.$store.commit('Client/setClientCustomerSatisfactionSurveyDocumentId', this.customer_satisfaction_survey.document_id)
                this.$store.dispatch("Client/updateClientCustomerSatisfactionSurvey").then(function(doc){
                    console.log('Document Updated!',doc)
                    parent.popup = false
                    parent.overlay = false
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
        popup_close(){
            this.$refs.form.reset()
            this.popup = false
            this.method = 'create'
        }
    }
}
</script>