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
                            <v-btn text color="grey">
                                <v-icon small left>mdi-eye</v-icon>
                                <span>View</span>
                            </v-btn>
                            <v-btn text color="grey">
                                <v-icon small left>mdi-pencil</v-icon>
                                <span>Edit</span>
                            </v-btn>
                            <v-btn text color="grey">
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
                            v-on="on">
                            <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <v-form>
                        <v-card>
                            <v-card-title>
                                <span class="headline">User Profile</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Legal first name*" v-model="members.first_name" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Legal middle name" v-model="members.middle_name" hint="example of helper text only on focus"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                            label="Legal last name*"
                                            hint="example of persistent helper text"
                                            persistent-hint
                                            required
                                            v-model="members.last_name"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-text-field label="Email*" v-model="members.email" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-text-field label="Role*" v-model="members.role" required></v-text-field>
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
                                            v-model="menu2"
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
                                                @change="menu2 = false"
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
                                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                <v-btn color="blue darken-1" text @click="createMember">Save</v-btn>
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
import moment from 'moment'
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import FileUpload from '../components/FileUpload'
const fb = require('../firebaseConfig.js')
export default {
    components: { FileUpload },
    data() {
        return {
            dialog: '',
            date: new Date().toISOString().substr(0, 10),
            menu2: false,
            teams: [
                { name: 'The Net Ninja', role: 'Web Developer', avatar: 'https://randomuser.me/api/portraits/men/78.jpg' },
                { name: 'Ryu', role: 'Graphic Designer', avatar: 'https://randomuser.me/api/portraits/men/78.jpg' },
                { name: 'Chun Li', role: 'Web Developer', avatar: 'https://randomuser.me/api/portraits/men/78.jpg' },
                { name: 'Gouken', role: 'Social Media Maverick', avatar: 'https://randomuser.me/api/portraits/men/78.jpg' },
                { name: 'Yoshi', role: 'Sales Guru', avatar: 'https://randomuser.me/api/portraits/men/78.jpg' }
            ],
            // members: {
            //     first_name: '',
            //     middle_name: '',
            //     last_name: '',
            //     email: '',
            //     role: '',
            //     avatar: '',
            // },
        }
    },
    computed: {
        computedDateFormattedMomentjs () {
            return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
        },
        ...mapState(['members']),
        
    },
    methods: {
        createMember(){
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
                    // this.picture = url;
                    console.log(url);
                    fullImageUrl = url
                    this.members.avatar = url
                    fb.teamsCollection.add({
                        createdOn: new Date(),
                        first_name: this.members.first_name,
                        middle_name: this.members.middle_name,
                        last_name: this.members.last_name,
                        email: this.members.email,
                        role: this.members.role,
                        avatar: fullImageUrl
                    }).then(ref => {
                        this.members.first_name = '',
                        this.members.middle_name = '',
                        this.members.last_name = '',
                        this.members.email = '',
                        this.members.role = '',
                        this.members.avatar = '';
                    }).catch(err => {
                        console.log(err)
                    })
                });
            });
        }
    }
}
</script>