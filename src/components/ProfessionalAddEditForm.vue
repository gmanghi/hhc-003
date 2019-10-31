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
                    @click="popup_create_professional">
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
                                        required
                                        v-model="professional.first_name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field 
                                        label="Middle Name" 
                                        v-model="professional.middle_name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        label="Last Name*"
                                        required
                                        v-model="professional.last_name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field 
                                        label="Mobile Number*" 
                                        v-model="professional.mobile_number" 
                                        required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field 
                                        label="Email*" 
                                        v-model="professional.email" 
                                        required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select
                                        :items="professions_list"
                                        label="Profession"
                                        v-model="professional.profession"
                                        >
                                    </v-select>
                                </v-col>
                                <!-- <v-col cols="12" sm="6">
                                    <v-text-field label="Role*" v-model="professional.role" required></v-text-field>
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
                                        v-model="birthdate"
                                        @change="date_popup = false"
                                    ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" sm="6" class="text-center">
                                    <v-file-input
                                        :rules="avatarRules"
                                        accept="image/png, image/jpeg, image/bmp"
                                        placeholder="Pick an avatar"
                                        prepend-icon="mdi-camera"
                                        label="Avatar"
                                        v-model="avatar">
                                    </v-file-input>
                                    
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="popup_close">Close</v-btn>
                        <v-btn color="blue darken-1" v-if="action === 'create'" text @click="process_save">Save</v-btn>
                        <v-btn color="blue darken-1" v-if="action === 'update'" text @click="process_update">Update</v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>
    </v-row>
    <!-- Popup End -->
</template>

<script>
import moment from 'moment'
import UploadButton from 'vuetify-upload-button'

export default {
    components: {
        'upload-btn': UploadButton
    },
    props: [ 'professional', 'popup', 'method' ],
    data(){
        return { 
            valid: true,
            default_birthdate: '1950-01-01',
            birthdate: '1950-01-01',
            date_popup: false,
            avatar: null,
            professions_list: ['Nurse', 'Physician','Caregiver'],
            requiredStringRules: [v => !!v || 'Name is required', v => v.length <= 100 || 'Name must be less than 10 characters'],
            requiredEmailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid',],
            avatarRules: [v => !v || v.size < 2000000 || 'Avatar size should be less than 2 MB!'],
            popup_dialog: false,
        }
    },
    computed: {
        computedDateFormattedMomentjs(){
            return this.professional.birthdate ? moment(this.professional.birthdate).format('YYYY-MM-DD') : this.birthdate
        },
        dialog(){
            this.avatar = null
            // this.popup_dialog = this.popup
            return this.popup
        },
        action(){
            return this.method
        }
        
    },
    methods: {
        popup_create_professional(){ 
            this.birthdate = this.default_birthdate
            this.$parent.popupCreateProfessional()
        },
        popup_close(){  
            this.$parent.popupClose()
        },
        process_save(){ 
            const data = {
                first_name: this.professional.first_name,
                middle_name: this.professional.middle_name,
                last_name: this.professional.last_name,
                email: this.professional.email,
                mobile_number: this.professional.mobile_number,
                birthdate: this.computedDateFormattedMomentjs,
                avatar: this.avatar,
                profession: this.professional.profession,
            }
            this.$parent.saveProfessional(data)
        },
        process_update(){
            const data = {
                document_id: this.professional.document_id,
                first_name: this.professional.first_name,
                middle_name: this.professional.middle_name,
                last_name: this.professional.last_name,
                email: this.professional.email,
                mobile_number: this.professional.mobile_number,
                birthdate: this.computedDateFormattedMomentjs,
                avatar: this.avatar,
                profession: this.professional.profession,
            }
            this.$parent.updateProfessional(data)
        }
    }
}
</script>