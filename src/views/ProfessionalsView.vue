<template>
    <div id="professional">
        <h1 class="subheading white--text">Details</h1>
        <v-container>
            <ProfessionalNavbar></ProfessionalNavbar>
            <v-card>
                <v-card-title>
                    <v-avatar
                        class="profile"
                        color="grey"
                        size="164"
                        tile
                        >
                        <v-img :src="professional.avatar ? professional.avatar : default_avatar"></v-img>
                    </v-avatar>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field 
                                    label="First Name"
                                    readonly
                                    v-model="professional.first_name">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field 
                                    label="Middle Name"
                                    readonly
                                    v-model="professional.middle_name">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="Last Name"
                                    readonly
                                    v-model="professional.last_name">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12">
                                <v-text-field 
                                    label="Address" 
                                    v-model="professional.address" 
                                    readonly>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field 
                                    label="Mobile Number" 
                                    v-model="professional.mobile_number" 
                                    readonly>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field 
                                    label="Email*" 
                                    v-model="professional.email" 
                                    readonly>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field 
                                    label="PRC ID/NC2 Number" 
                                    v-model="professional.license" 
                                    readonly>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu
                                v-model="license_expiry_date_popup"
                                :close-on-content-click="false"
                                max-width="290"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                            :value="professional.license_expiry_date"
                                            clearable
                                            label="License Date of Expiry*"
                                            readonly
                                            v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="professional.license_expiry_date"
                                        @change="license_expiry_date_popup = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field 
                                    label="Specialty" 
                                    v-model="professional.specialty" 
                                    readonly>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field 
                                    label="Area of Coverage" 
                                    v-model="professional.coverage" 
                                    readonly>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu
                                v-model="birthdate_popup"
                                :close-on-content-click="false"
                                max-width="290"
                                >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        :value="professional.birthdate"
                                        clearable
                                        label="Birthdate"
                                        readonly
                                        v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="professional.birthdate"
                                    @change="birthdate_popup = false"
                                ></v-date-picker>
                                </v-menu>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
            <ProfessionalAddEditForm 
                v-bind:popup="popup" 
                v-bind:professional="professional" 
                v-bind:method="method" 
                v-bind:document_id="document_id" 
                v-bind:overlay="overlay"
            ></ProfessionalAddEditForm>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClientNavbar from '@/components/ClientNavbar'
import ProfessionalNavbar from '../components/ProfessionalNavbar'
import ProfessionalAddEditForm from '../components/ProfessionalAddEditForm'
export default {
    data() {
        return {
            license_expiry_date_popup: false,
            birthdate_popup: false,
            popup: false,
            overlay: false,
            method: 'update',
            document_id: '',
            default_avatar: 'https://firebasestorage.googleapis.com/v0/b/hhc-002.appspot.com/o/gku6f58eqo.bmp?alt=media&token=070c70e4-dcf0-47d0-b0d9-d8f5cf1071cb',
        }
    },
    components: { ProfessionalNavbar, ProfessionalAddEditForm },
    mounted() {
        this.overlay = true
        const parent = this
        this.$store.commit('Professional/setDocumentId', this.$route.params.id)
        this.$store.dispatch("Professional/getProfessional").then(function(response){
            parent.overlay = false
        }).catch(function(error){
            parent.overlay = false
            console.log(error)
        });
        this.document_id = this.$route.params.id
    },
    computed: {
        ...mapGetters({
            professional: 'Professional/professional'
        }),
    },
    methods: {
        popupOpen(){
            this.popup = true
        },
        popupClose(){
            this.overlay = true
            const parent = this
            this.$store.commit('Professional/setDocumentId', this.$route.params.id)
            this.$store.dispatch("Professional/getProfessional").then(function(response){
                parent.overlay = false
                parent.popup = false
            }).catch(function(error){
                parent.overlay = false
                console.log(error)
            });
            this.document_id = this.$route.params.id
        },
    }
}
</script>