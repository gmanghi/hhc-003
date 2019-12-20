<template>
    <div id="Professionals">
        <h1 class="subheading white--text">{{profession}}</h1>
        
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="professional in professionals" :key="professional.id">
                    <v-card flat class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2">
                                <img :src="professional.avatar ? professional.avatar : default_avatar" :alt="professional.avatar" />
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ professional.first_name }} {{ professional.last_name }}</div>
                            <div class="grey--text">{{ professional.email }}</div>
                            <div class="grey--text">{{ professional.mobile_number }}</div>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn 
                                text color="grey" 
                                :to="{ name: 'professional_details', params: { id: professional.id } }"
                                >
                                <v-icon small left>mdi-eye</v-icon>
                                <span>View</span>
                            </v-btn>
                            <!-- <v-btn text color="grey" @click="editProfessional(professional.id)">
                                <v-icon small left>mdi-pencil</v-icon>
                                <span>Edit</span>
                            </v-btn> -->
                            <v-btn text color="grey" @click="deleteProfessional(professional.id)">
                                <v-icon small left>mdi-delete</v-icon>
                                <span>Delete</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
            <ProfessionalAddEditForm 
                v-bind:profession="profession" 
                v-bind:professional="professional" 
                v-bind:popup="popup" 
                v-bind:method="method" 
                v-bind:overlay="overlay"
            ></ProfessionalAddEditForm>
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
        </v-container>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex'
import ProfessionalAddEditForm from '../components/ProfessionalAddEditForm'

export default {
    components: { ProfessionalAddEditForm },
    data() {
        return {
            profession: '',
            professionals: [],
            professional: {},
            default_avatar: 'https://firebasestorage.googleapis.com/v0/b/hhc-002.appspot.com/o/gku6f58eqo.bmp?alt=media&token=070c70e4-dcf0-47d0-b0d9-d8f5cf1071cb',
            popup: false,
            overlay: false,
            method: 'create',
            status: 'Verified',
            notification: '',
            snackbar: false,
        }
    },
    beforeRouteUpdate (to, from, next) {
        if(to.params.profession == 'physical-therapist'){
            this.profession = 'Physical Therapist'
        }
        else{
            this.profession = to.params.profession.charAt(0).toUpperCase() + to.params.profession.slice(1)
        }
        this.overlay = true
        const parent = this
        this.$store.commit('Professional/setProfessionals', [])
        this.$store.commit('Professional/setProfession', this.profession)
        this.$store.dispatch("Professional/getProfessionalsByProfession").then(function(docs) {
            parent.professionals = docs
            parent.overlay = false
            next();
        }).catch(function (error){
            parent.overlay = false
            parent.snackbar = true
            parent.notification = error
        })
    },
    mounted() {
        if(this.$route.params.profession == 'physical-therapist'){
            this.profession = 'Physical Therapist'
        }
        else{
            this.profession = this.$route.params.profession.charAt(0).toUpperCase() + this.$route.params.profession.slice(1)
        }
        this.overlay = true
        const parent = this
        this.$store.commit('Professional/setProfessionals', [])
        this.$store.commit('Professional/setProfession', this.profession)
        this.$store.dispatch("Professional/getProfessionalsByProfession").then(function(docs) {
            parent.professionals = docs
            parent.overlay = false
        }).catch(function (error){
            parent.overlay = false
            parent.snackbar = true
            parent.notification = error
        })
    },
    computed: {
        // ...mapGetters({
        //     professionals: 'Professional/professionals'
        // })
    },
    methods: {
        viewProfessional(document_id){
            this.overlay = true
            const parent = this
            this.$store.dispatch("Professional/clearProfessional")
            this.$store.commit('Professional/setDocumentId', document_id)
            this.$store.dispatch("Professional/getProfessional").then(function(data){
                parent.professional = data
                parent.popup = true
                parent.method = 'view'
                parent.overlay = false
            }).catch(function(error){
                parent.notification = error
                parent.snackbar = true
                console.log(error)
            })
            // this.professional = this.$store.getters['Professional/professional']
        },
        editProfessional(document_id){
            this.overlay = true
            const parent = this
            this.$store.dispatch("Professional/clearProfessional")
            this.$store.commit('Professional/setDocumentId', document_id)
            this.$store.dispatch("Professional/getProfessional").then(function(data){
                console.log('resolve',data)
                parent.professional = data
                parent.popup = true
                parent.method = 'update'
                parent.overlay = false
            }).catch(function(error){
                parent.notification = error
                parent.snackbar = true
                console.log(error)
            })
        },
        deleteProfessional(document_id){
            this.$store.commit('Professional/setDocumentId', document_id)
            this.$store.dispatch("Professional/deleteProfessional")
        },
        saveProfessional(data){
            return new Promise((resolve, reject) => {
                this.overlay = true
                const parent = this
                data.profession = this.profession
                data.status = this.status
                this.$store.commit('Professional/setProfessional', data)
                this.$store.dispatch("Professional/createProfessional").then(function(doc){
                    console.log('saveProfessional',doc)
                    // parent.popup = false
                    parent.overlay = false
                    resolve(true)
                }).catch(function(error){
                    reject(error)
                    parent.overlay = false
                    parent.notification = error
                    parent.snackbar = true
                })
            })
        },
        updateProfessional(data){
            return new Promise((resolve, reject) => {
                this.overlay = true
                const parent = this
                this.$store.commit('Professional/setProfessional', data)
                this.$store.dispatch("Professional/updateProfessional").then(function(doc){
                    console.log('updateProfessional',doc)
                    // parent.popup = false
                    // parent.method = 'create'
                    parent.overlay = false
                    resolve(true)
                }).catch(function(error){
                    reject(error)
                    parent.overlay = false
                    parent.notification = error
                    parent.snackbar = true
                })
            })
        },
        popupClose(){
            this.$store.dispatch("Professional/clearProfessional")
            // this.professional = this.$store.getters['Professional/professional']
            console.log(this.professional)
            this.method = 'create'
            this.popup = false
        },
        popupOpen(){
            const parent = this
            this.$store.dispatch("Professional/clearProfessional").then(function(data){
                console.log(data)
                parent.professional = data
                parent.method = 'create'
                parent.popup = true
                parent.overlay = false
            }).catch(function(error){
                console.log(error)
                parent.notification = error
            })
        },
    }
}
</script>