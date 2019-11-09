<template>
        <div id="client-hids">
        <h1 class="subheading grey--text">Client HIDs</h1>
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
                <v-dialog v-model="popup" persistent max-width="600px">
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
                                <span class="headline">Health Information Data Sheet</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="3">
                                            <v-text-field 
                                                label="Name*"
                                                required
                                                :rules="requiredStringRules"
                                                v-model="demographic.d1">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="3">
                                            <v-text-field 
                                                label="Age"
                                                required
                                                :rules="requiredStringRules"
                                                v-model="demographic.d2"
                                                type="number"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="3">
                                            <v-select
                                                :items="['Male', 'Female']"
                                                label="Gender"
                                                v-model="demographic.d3"
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="3">
                                            <v-text-field 
                                                label="Case No."
                                                required
                                                :rules="requiredStringRules"
                                                v-model="demographic.d4">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
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
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClientNavbar from '@/components/ClientNavbar'
export default {
    data(){
        return {
            valid: true,
            popup: false,
            method: 'create',
            search: '',
            contract: null,
            headers: [
                { text: 'Date', align: 'center', sortable: true, value: 'createdOn' },
                { text: 'Edit', align: 'center', sortable: false, value: 'actions' },
            ],
            requiredStringRules: [v => !!v || 'Field is required'],
            demographic: {},
        }
    },
    components: {
        ClientNavbar
    },
    beforeRouteUpdate (to, from, next) {
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClientHidss");
        next();
    },
    mounted() {
        this.$store.commit('Client/setDocumentId', this.$route.params.id)
        this.$store.dispatch("Client/getClientHidss");
    },
    computed: {
        ...mapGetters({
            hidss: 'Client/hidss',
        }),
    },
    methods: {
        edit_hids(document_id){
            let parent = this
            this.$store.commit('Client/setClientHidsDocumentId', document_id)
            this.$store.dispatch("Client/getClientHids").then(function(doc){
                parent.demographic = doc.demographic
                parent.popup = true
                parent.method = 'update'
            }).catch(function(error){
                console.log(error)
            })
        },
        process_save(){ 
            if (this.$refs.form.validate()) {
                const parent = this
                const data = {
                    createdOn: new Date(), 
                    demographic: this.demographic
                }
                this.$store.commit('Client/setClientHids', data)
                this.$store.dispatch("Client/createClientHids").then(function(doc){
                    console.log('saveClientHids',doc)
                    parent.popup = false
                }).catch(function(error){
                    console.log(error)
                })
                this.popup = false
            }
        },
        process_update(){
            if (this.$refs.form.validate()) {
                const parent = this
                const data = {
                    demographic: this.demographic
                }
                this.$store.commit('Client/setClientHids', data)
                this.$store.dispatch("Client/updateClientHids").then(function(doc){
                    console.log('updateClientHids',doc)
                    parent.popup = false
                }).catch(function(error){
                    console.log(error)
                })
                this.popup = false
            }
        },
        popup_close(){
            this.$refs.form.reset()
            this.popup = false
            this.method = 'creates'
        }
    }
}
</script>