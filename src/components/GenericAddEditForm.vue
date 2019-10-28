<template>
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
                                            label="First Name*"
                                            :rules="requiredStringRules"
                                            required
                                            v-model="member.first_name">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field 
                                            label="Middle Name" 
                                            v-model="member.middle_name">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field
                                            label="Last Name*"
                                            persistent-hint
                                            required
                                            v-model="member.last_name">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field 
                                            label="Mobile Number*" 
                                            v-model="member.mobile_number" 
                                            required>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field 
                                            label="Email*" 
                                            v-model="member.email" 
                                            required>
                                        </v-text-field>
                                    </v-col>
                                    <!-- <v-col cols="12" sm="6">
                                        <v-text-field label="Role*" v-model="member.role" required></v-text-field>
                                    </v-col> -->
                                    <!--
                                    <v-col cols="12">
                                        <v-text-field label="Password*" type="password" required></v-text-field>
                                    </v-col>
                                    -->
                                    <!-- <v-col cols="12" sm="6">
                                        <v-select
                                        :items="['0-17', '18-29', '30-54', '54+']"
                                        label="Age*"
                                        required
                                        ></v-select>
                                    </v-col> -->
                                    <!-- <v-col cols="12" sm="6">
                                        <v-autocomplete
                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                        label="Interests"
                                        multiple
                                        ></v-autocomplete>
                                    </v-col> -->
                                    <v-col cols="12" sm="6">
                                        <v-menu
                                        v-model="date_popup"
                                        :close-on-content-click="false"
                                        max-width="290"
                                        >
                                        <!-- <template v-slot:activator="{ on }">
                                            <v-text-field
                                            :value="computedDateFormattedMomentjs"
                                            clearable
                                            label="Birthdate*"
                                            readonly
                                            v-on="on"
                                            ></v-text-field>
                                        </template> -->
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
</template>

<script>
import moment from 'moment'
import FileUpload from './FileUpload'
const fb = require('../firebaseConfig.js')
export default {
    components: { FileUpload },
    data() {
        return {
            valid: true,
            requiredStringRules: [v => !!v || 'Name is required', v => v.length <= 100 || 'Name must be less than 10 characters'],
            dialog: '',
            // date: new Date().toISOString().substr(0, 10),
            date: '1950-01-01',
            date_popup: false,
            loading: false,
            member: {
                first_name: '',
                middle_name: '',
                last_name: '',
                email: '',
                mobile_number: '',
                birthdate: '',
                avatar: '',
            },
            collection: this.$parent.collection,
        }
    },
    computed: {
        computedDateFormattedMomentjs () {
            return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
        },
    },
    methods: {
        closeAddEditForm(){
            this.$refs.form.resetValidation();
            this.$store.commit('setFileData', '')
            this.dialog = false;
            this.loading = false;
        },
        popAddEditForm(){
            this.member.first_name = '';
            this.member.middle_name = '';
            this.member.last_name = '';
            this.member.email = '';
            this.member.mobile_number = '';
            this.member.birthdate = '';
            this.member.avatar = '';
            this.dialog = true;

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
                        this.member.avatar = url
                        this.collection.add({
                            createdOn: new Date(),
                            first_name: this.member.first_name,
                            middle_name: this.member.middle_name,
                            last_name: this.member.last_name,
                            email: this.member.email,
                            mobile_number: this.member.mobile_number,
                            birthdate: this.member.birthdate,
                            avatar: fullImageUrl
                        }).then(ref => {
                            this.member.first_name = ''
                            this.member.middle_name = ''
                            this.member.last_name = ''
                            this.member.email = ''
                            this.member.mobile_number = ''
                            this.member.birthdate = ''
                            this.member.avatar = ''
                            this.$store.commit('setFileData', '')
                            this.dialog = false
                            this.loading = false
                            this.$refs.form.resetValidation();
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