<template>
    <div id="physicians">
        <h1 class="subheading grey--text">Physicians</h1>
        
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in members" :key="person.id">
                    <v-card flat class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2">
                                <img :src="person.avatar" :alt="person.avatar" />
                                <!-- <img src="https://randomuser.me/api/portraits/men/78.jpg" /> -->
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ person.first_name }} {{ person.last_name }}</div>
                            <div class="grey--text">{{ person.email }}</div>
                            <div class="grey--text">{{ person.mobile_number }}</div>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn text color="grey">
                                <v-icon small left>mdi-eye</v-icon>
                                <span>View</span>
                            </v-btn>
                            <v-btn text color="grey">
                                <v-icon small left>mdi-pencil</v-icon>
                                <span>Edit</span>
                            </v-btn>
                            <v-btn text color="grey" @click="deleteMember(person.id)">
                                <v-icon small left>mdi-delete</v-icon>
                                <span>Delete</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>

            <GenericAddEditForm></GenericAddEditForm>
        </v-container>
    </div>    
</template>

<script>
import moment from 'moment'
import GenericAddEditForm from '../components/GenericAddEditForm'

const fb = require('../firebaseConfig.js')

export default {
    components: { GenericAddEditForm },
    data() {
        return {
            members: [],
            member: {
                first_name: '',
                middle_name: '',
                last_name: '',
                email: '',
                role: '',
                avatar: '',
            },
            collection: fb.physiciansCollection,
        }
    },
    created() {
        
        this.collection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
            let membersArray = []

            querySnapshot.forEach(doc => {
                let member = doc.data()
                member.id = doc.id
                membersArray.push(member)
            })
            this.members = membersArray;
        })
    },
    methods: {
        editMember(id){
            parent = this;
            this.collection.doc(id).get().then(function(doc) {
                if (doc.exists) {
                    // parent.$store.commit('team/setMember', doc.data())
                    parent.member = doc.data()
                    parent.dialog = true;
                    console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        },
        viewMember(id){
            this.collection.doc(id).get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        },
        deleteMember(id){
            this.collection.doc(id).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        },
    }
}
</script>