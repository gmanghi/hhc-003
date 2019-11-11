<template>
        <div id="client-hids">
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
                    :items="hidss"
                    :search="search"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-btn
                            color="blue-grey"
                            class="ma-2 white--text"
                            @click="edit_hids(item.document_id)"
                        >
                            Edit
                            <v-icon right dark>mdi-pencil</v-icon>
                        </v-btn>    
                    </template>
                </v-data-table>
            </v-card>
            <!-- Popup Start -->
            <v-row justify="center">
                <v-dialog v-model="popup" persistent :scrollable="scrollable">
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
                                <span class="headline">HIDS Form</span>
                                <v-tabs v-model="tab">
                                    <v-tab>Demographic Data</v-tab>
                                    <v-tab>History of Present Illness</v-tab>
                                    <v-tab>Living Arrangements</v-tab>
                                    <v-tab>Sensory Status</v-tab>
                                    <v-tab>Integumentary Status</v-tab>
                                    <v-tab>Pressure Ulcers</v-tab>
                                    <v-tab>Wound Description</v-tab>
                                    <v-tab>Cardio Respiratory Status</v-tab>
                                    <v-tab>Elimination Status</v-tab>
                                    <v-tab>Neuro/Emotional/Behavioral Status</v-tab>
                                </v-tabs>
                            </v-card-title>
                            <v-card-text>
                                <v-tabs-items v-model="tab">
                                    <v-tab-item><HidsDemographicData v-bind:demographic="demographic"></HidsDemographicData></v-tab-item>
                                    <v-tab-item><HidsHistoryOfPresentIllness v-bind:hopi="hopi" ></HidsHistoryOfPresentIllness></v-tab-item>
                                    <v-tab-item><HidsLivingArrangements v-bind:la="la"></HidsLivingArrangements></v-tab-item>
                                    <v-tab-item><HidsSensoryStatus v-bind:ss="ss"></HidsSensoryStatus></v-tab-item>
                                    <v-tab-item><HidsIntegumentaryStatus v-bind:integumentary="integumentary"></HidsIntegumentaryStatus></v-tab-item>
                                    <v-tab-item><HidsPressureUlcers v-bind:pu="pu"></HidsPressureUlcers></v-tab-item>
                                    <v-tab-item><HidsWoundDescription v-bind:wd="wd"></HidsWoundDescription></v-tab-item>
                                    <v-tab-item><HidsCardioRespiratoryStatus v-bind:crs="crs"></HidsCardioRespiratoryStatus></v-tab-item>
                                    <v-tab-item><HidsEliminationStatus v-bind:es="es"></HidsEliminationStatus></v-tab-item>
                                    <v-tab-item><HidsNEBStatus v-bind:nebs="nebs"></HidsNEBStatus></v-tab-item>
                                </v-tabs-items>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="popup_close">Close</v-btn>
                                <v-btn color="blue darken-1" v-if="method === 'create'" text @click="process_save">Save</v-btn>
                                <v-btn color="blue darken-1" v-if="method === 'update'" text @click="process_update">Update</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                    
                </v-dialog>
                
            </v-row>
            <!-- Popup End -->
            <v-overlay :value="overlay" z-index="202">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import ClientNavbar from '@/components/ClientNavbar'
import HidsDemographicData from '@/components/ClientHids/DemographicData'
import HidsHistoryOfPresentIllness from '@/components/ClientHids/HistoryOfPresentIllness'
import HidsLivingArrangements from '@/components/ClientHids/LivingArrangements'
import HidsSensoryStatus from '@/components/ClientHids/SensoryStatus'
import HidsIntegumentaryStatus from '@/components/ClientHids/IntegumentaryStatus'
import HidsPressureUlcers from '@/components/ClientHids/PressureUlcers'
import HidsWoundDescription from '@/components/ClientHids/WoundDescription'
import HidsCardioRespiratoryStatus from '@/components/ClientHids/CardioRespiratoryStatus'
import HidsEliminationStatus from '@/components/ClientHids/EliminationStatus'
import HidsNEBStatus from '@/components/ClientHids/NEBStatus'
export default {
    components: {
        ClientNavbar, 
        HidsDemographicData, 
        HidsHistoryOfPresentIllness, 
        HidsLivingArrangements, 
        HidsSensoryStatus, 
        HidsIntegumentaryStatus, 
        HidsPressureUlcers,
        HidsWoundDescription,
        HidsCardioRespiratoryStatus,
        HidsEliminationStatus,
        HidsNEBStatus,
    },
    data(){
        return {
            tab: null,
            valid: true,
            popup: false,
            overlay: false,
            active_tab: 0,
            scrollable: true,
            method: 'create',
            search: '',
            headers: [
                { text: 'Date', align: 'center', sortable: true, value: 'createdOn' },
                { text: 'Edit', align: 'center', sortable: false, value: 'actions' },
            ],
            // requiredStringRules: [v => !!v || 'Field is required'],
            hids: {},
            demographic: {},
            hopi: {},
            la: {},
            ss: {},
            integumentary: {},
            pu: {},
            wd: {},
            crs: {},
            es: {},
            nebs: {},
        }
    },
    beforeRouteUpdate (to, from, next) {
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClientHidss");
        next();
    },
    mounted() {
        this.$store.commit('Client/setDocumentId', this.$route.params.id)
        this.$store.dispatch("Client/getClientHidss")
        // this.active_tab = 0
    },
    computed: {
        ...mapGetters({
            hidss: 'Client/hidss',
        }),
    },
    watch:{
        tab: function(val){
            console.log(val)
        }
    },
    methods: {
        edit_hids(document_id){
            this.overlay = true
            let parent = this
            this.$store.commit('Client/setClientHidsDocumentId', document_id)
            this.$store.dispatch("Client/getClientHids").then(function(doc){
                console.log(doc)
                parent.hids = doc
                parent.demographic = doc.demographic
                parent.hopi = doc.hopi
                parent.la = doc.la
                parent.ss = doc.ss
                parent.integumentary = doc.integumentary
                parent.pu = doc.pu
                parent.wd = doc.wd
                parent.crs = doc.crs
                parent.es = doc.es
                parent.nebs = doc.nebs
                parent.popup = true
                parent.method = 'update'
                parent.overlay = false
                parent.tab = 0
            }).catch(function(error){
                console.log(error)
            })
        },
        process_save(){ 
            if (this.$refs.form.validate()) {
                this.overlay = true
                const parent = this
                const data = {
                    createdOn: new Date(), 
                    demographic: this.demographic,
                    hopi: this.hopi,
                    la: this.la,
                    ss: this.ss,
                    integumentary: this.integumentary,
                    pu: this.pu,
                    wd: this.wd,
                    crs: this.crs,
                    es: this.es,
                    nebs: this.nebs,
                }
                this.$store.commit('Client/setClientHids', data)
                this.$store.dispatch("Client/createClientHids").then(function(doc){
                    console.log('saveClientHids',doc)
                    parent.popup = false
                    parent.overlay = false
                    parent.tab = 0
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
        process_update(){
            if (this.$refs.form.validate()) {
                this.overlay = true
                const parent = this
                const data = {
                    demographic: this.demographic,
                    hopi: this.hopi,
                    la: this.la,
                    ss: this.ss,
                    integumentary: this.integumentary,
                    pu: this.pu,
                    wd: this.wd,
                    crs: this.crs,
                    es: this.es,
                    nebs: this.nebs,
                }
                this.$store.commit('Client/setClientHids', data)
                this.$store.commit('Client/setClientHidsDocumentId', this.hids.document_id)
                this.$store.dispatch("Client/updateClientHids").then(function(doc){
                    console.log('Document Updated!',doc)
                    parent.popup = false
                    parent.overlay = false
                    parent.tab = 0
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
        popup_close(){
            this.$refs.form.reset()
            this.popup = false
            this.method = 'create'
            this.tab = 0
        }
    }
}
</script>