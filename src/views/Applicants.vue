<template>
    <div id="applicants">
        <h1 class="subheading grey--text">Applicants</h1>
        
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="professional in professionals" :key="professional.id">
                    <v-card flat class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2">
                                <img :src="professional.avatar" :alt="professional.avatar" />
                                <!-- <img src="https://randomuser.me/api/portraits/men/78.jpg" /> -->
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ professional.first_name }} {{ professional.last_name }}</div>
                            <div class="grey--text">{{ professional.email }}</div>
                            <div class="grey--text">{{ professional.mobile_number }}</div>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn text color="grey" @click="viewProfessional(professional.id)">
                                <v-icon small left>mdi-eye</v-icon>
                                <span>View</span>
                            </v-btn>
                            <v-btn text color="grey" @click="editProfessional(professional.id)">
                                <v-icon small left>mdi-pencil</v-icon>
                                <span>Edit</span>
                            </v-btn>
                            <v-btn text color="grey" @click="deleteProfessional(professional.id)">
                                <v-icon small left>mdi-delete</v-icon>
                                <span>Delete</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
            <ProfessionalAddEditForm v-bind:professional="professional" v-bind:popup="popup" v-bind:method="method"></ProfessionalAddEditForm>
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
            professional: {},
            popup: false,
            method: 'create',
            status: 'New'
        }
    },
    beforeRouteUpdate (to, from, next) {
        this.$store.dispatch("Professional/getProfessionalsByStatusNew")
        next();
    },
    mounted() {
        this.$store.dispatch("Professional/getProfessionalsByStatusNew");
    },
    computed: {
        ...mapGetters({
            professionals: 'Professional/professionals'
        })
    },
    methods: {
        viewProfessional(document_id){
            this.$store.commit('Professional/setDocumentId', document_id)
            this.$store.dispatch("Professional/getProfessional")
            this.professional = this.$store.getters['Professional/professional']
        },
        editProfessional(document_id){
            this.$store.commit('Professional/setDocumentId', document_id)
            this.$store.dispatch("Professional/getProfessional")
            this.professional = this.$store.getters['Professional/professional']
            this.popup = true
            this.method = 'update'
            console.log(this.professional)
        },
        deleteProfessional(document_id){
            this.$store.commit('Professional/setDocumentId', document_id)
            this.$store.dispatch("Professional/deleteProfessional")
        },
        saveProfessional(data){
            const parent = this
            this.$store.commit('Professional/setProfessional', data)
            this.$store.dispatch("Professional/createProfessional").then(function(doc){
                console.log('saveProfessional',doc)
                parent.popup = false
            }).catch(function(error){
                console.log(error)
            })
            
        },
        updateProfessional(data){
            const parent = this
            this.$store.commit('Professional/setProfessional', data)
            this.$store.dispatch("Professional/updateProfessional").then(function(doc){
                console.log('updateProfessional',doc)
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
        popupCreateProfessional(){
            this.$store.dispatch("Professional/clearProfessional")
            this.professional = this.$store.getters['Professional/professional']
            this.method = 'create'
            this.popup = true
        },
    }
}
</script>