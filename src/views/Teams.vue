<template>
    <div id="nurses">
        <h1 class="subheading grey--text">Teams</h1>
        
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
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn text color="grey" @click="viewMember(person.id)">
                                <v-icon small left>mdi-eye</v-icon>
                                <span>View</span>
                            </v-btn>
                            <v-btn text color="grey" @click="editMember(person.id)">
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

            <!-- Popup Start -->
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                        <v-btn
                            fixed
                            dark
                            fab
                            bottom
                            right
                            color="pink"
                            @click="popAddEditForm">
                            <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Profile</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field 
                                                label="Legal first name*"
                                                :rules="requiredStringRules"
                                                required
                                                v-model="member.first_name">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Legal middle name" v-model="member.middle_name" hint="example of helper text only on focus"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                            label="Legal last name*"
                                            hint="example of persistent helper text"
                                            persistent-hint
                                            required
                                            v-model="member.last_name"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-text-field label="Email*" v-model="member.email" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-text-field label="Role*" v-model="member.role" required></v-text-field>
                                        </v-col>
                                        <!--
                                        <v-col cols="12">
                                            <v-text-field label="Password*" type="password" required></v-text-field>
                                        </v-col>
                                        -->
                                        <v-col cols="12" sm="6">
                                            <v-select
                                            :items="['0-17', '18-29', '30-54', '54+']"
                                            label="Age*"
                                            required
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-autocomplete
                                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                            label="Interests"
                                            multiple
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-menu
                                            v-model="date_popup"
                                            :close-on-content-click="false"
                                            max-width="290"
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                :value="computedDateFormattedMomentjs"
                                                clearable
                                                label="Formatted with Moment.js"
                                                readonly
                                                v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="date"
                                                @change="date_popup = false"
                                            ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <!-- <input type="file" @change="onFileChange" /> -->
                                            <FileUpload />
                                            
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeAddEditForm">Close</v-btn>
                                <v-btn color="blue darken-1" text @click="createMember" :loading="loading">Save</v-btn>
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
// import { mapGetters } from 'vuex'
import moment from 'moment'
import FileUpload from '../components/FileUpload'
// import { validationMixin } from 'vuelidate'
// import { required, maxLength, email } from 'vuelidate/lib/validators'


const fb = require('../firebaseConfig.js')



export default {
    components: { FileUpload },
    data() {
        return {
            valid: true,
            requiredStringRules: [v => !!v || 'Name is required', v => v.length <= 100 || 'Name must be less than 10 characters'],
            dialog: '',
            date: new Date().toISOString().substr(0, 10),
            date_popup: false,
            loading: false,
            // member: {},
            members: [],
            member: {
                first_name: '',
                middle_name: '',
                last_name: '',
                email: '',
                role: '',
                avatar: '',
            },
        }
    },
    created() {
        fb.teamsCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
            let membersArray = []

            querySnapshot.forEach(doc => {
                let member = doc.data()
                member.id = doc.id
                membersArray.push(member)
            })
            this.members = membersArray;
        })
    },
    computed: {
        computedDateFormattedMomentjs () {
            return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
        },
        // ...mapGetters("team", ['member'])
    },
    // watch: {
    //     member: function(val){
    //         console.log('watch', val)
    //         this.member.first_name = 'hello'
    //         parent.dialog = true;
    //     }
    // },
    methods: {
        closeAddEditForm(){
            this.$refs.form.resetValidation();
            this.dialog = false;
        },
        popAddEditForm(){
            this.member.first_name = '';
            this.member.middle_name = '';
            this.member.last_name = '';
            this.member.email = '';
            this.member.role = '';
            this.member.avatar = '';
            // this.$refs.form.resetValidation();
            this.dialog = true;
            // this.loading = false;
            // this.$refs.form.reset()
        },
        editMember(id){
            parent = this;
            fb.teamsCollection.doc(id).get().then(function(doc) {
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
            fb.teamsCollection.doc(id).get().then(function(doc) {
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
            fb.teamsCollection.doc(id).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        },
        createMember(){
            if(this.$refs.form.validate()){
                this.loading = true;
                const fileData = this.$store.getters.getFileData;
                const fileName =  Math.random().toString(36).substring(2)
                let fileExtension = null;
                let fullImageUrl = null;

                switch(fileData.type){
                    case 'image/jpeg': fileExtension = '.jpg';
                    case 'image/png': fileExtension = '.png';
                    case 'image/bmp': fileExtension = '.bmp';
                }

                const storageRef = fb.storage.ref(fileName+fileExtension).put(this.$store.getters.getFileData);

                storageRef.on(`state_changed`, snapshot => {
                    // this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                }, 
                error => {
                    console.log(error.message)
                },
                () => {
                    storageRef.snapshot.ref.getDownloadURL().then( (url) => {
                        console.log(url);
                        fullImageUrl = url
                        this.members.avatar = url
                        fb.teamsCollection.add({
                            createdOn: new Date(),
                            first_name: this.member.first_name,
                            middle_name: this.member.middle_name,
                            last_name: this.member.last_name,
                            email: this.member.email,
                            role: this.member.role,
                            avatar: fullImageUrl
                        }).then(ref => {
                            this.member.first_name = '',
                            this.member.middle_name = '',
                            this.member.last_name = '',
                            this.member.email = '',
                            this.member.role = '',
                            this.member.avatar = '';
                            this.dialog = false;
                            this.loading = false;
                        }).catch(err => {
                            this.loading = false;
                            console.log(err)
                        })
                        
                    });
                });
            }
        }
    }
}
</script>