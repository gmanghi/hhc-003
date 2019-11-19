<template>
    <!-- Popup Start -->
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="1000px">
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
                lazy-validation
                >
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
                                        :rules="requiredStringRules"
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
                                        :rules="requiredStringRules"
                                        v-model="professional.last_name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12">
                                    <v-text-field 
                                        label="Address*" 
                                        :rules="requiredStringRules"
                                        v-model="professional.address" 
                                        required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field 
                                        label="Mobile Number*" 
                                        :rules="requiredStringRules"
                                        v-model="professional.mobile_number" 
                                        required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field 
                                        label="Email*" 
                                        :rules="requiredStringRules"
                                        v-model="professional.email" 
                                        required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field 
                                        label="PRC ID/NC2 Number*" 
                                        :rules="requiredStringRules"
                                        v-model="professional.license" 
                                        required>
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
                                                :value="computedExpiryDateFormattedMomentjs"
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
                                        label="Specialty*" 
                                        :rules="requiredStringRules"
                                        v-model="professional.specialty" 
                                        required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field 
                                        label="Area of Coverage*" 
                                        :rules="requiredStringRules"
                                        v-model="professional.coverage" 
                                        required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select
                                        :items="professions_list"
                                        label="Profession"
                                        :rules="requiredStringRules"
                                        v-model="professional.profession"
                                        required
                                        >
                                    </v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select
                                        :items="professional_status"
                                        label="Status"
                                        v-model="professional.status"
                                        :rules="requiredStringRules"
                                        required    
                                        >
                                    </v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-menu
                                    v-model="birthdate_popup"
                                    :close-on-content-click="false"
                                    max-width="290"
                                    >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                            :value="computedBirthdateFormattedMomentjs"
                                            clearable
                                            label="Birthdate*"
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
                                <v-col cols="12" sm="6" class="text-center">
                                    <!-- <v-file-input
                                        :rules="requiredAvatarRules"
                                        accept="image/png, image/jpeg, image/bmp"
                                        placeholder="Pick an avatar"
                                        prepend-icon="mdi-camera"
                                        label="Avatar*"
                                        v-model="avatar"
                                        >
                                    </v-file-input> -->
                                    <v-file-input
                                        accept="image/png, image/jpeg, image/bmp"
                                        placeholder="Pick an avatar"
                                        prepend-icon="mdi-camera"
                                        label="Avatar*"
                                        v-model="avatar"
                                        >
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
            <v-overlay :value="overlay">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
        </v-dialog>
    </v-row>
    <!-- Popup End -->
</template>

<script>
import moment from 'moment'

export default {
    props: [ 'professional', 'profession', 'popup', 'method', 'overlay' ],
    data(){
        return { 
            valid: true,
            // default_birthdate: '1950-01-01',
            // birthdate: '1950-01-01',
            birthdate_popup: false,
            license_expiry_date_popup: false,
            avatar: null,
            professions_list: ['Nurse', 'Physician', 'Caregiver', 'Physical Therapist', 'Nutritionist'],
            professional_status: ['New', 'Pending','Verified'],
            requiredStringRules: [v => !!v || 'Field is required'],
            requiredEmailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid',],
            requiredAvatarRules: [v => !!v || 'Avatar is required', v => !v || v.size < 2000000 || 'Avatar size should be less than 2 MB!'],
            popup_dialog: false,
        }
    },
    computed: {
        computedBirthdateFormattedMomentjs(){
            // return this.professional.birthdate ? moment(this.professional.birthdate).format('YYYY-MM-DD') : this.birthdate
            return this.professional.birthdate ? moment(this.professional.birthdate).format('YYYY-MM-DD') : ''
        },
        computedExpiryDateFormattedMomentjs(){  
            return this.professional.license_expiry_date ? moment(this.professional.license_expiry_date).format('YYYY-MM-DD') : ''
        },
        dialog(){
            this.avatar = null
            // this.popup_dialog = this.popup
            return this.popup
        },
        action(){
            return this.method
        },
        // status(){
        //     return this.professional.status ? this.professional.status : this.default_status
        // }
        
    },
    methods: {
        popup_create_professional(){ 
            // this.birthdate = this.default_birthdate
            this.$parent.popupCreateProfessional()
        },
        popup_close(){  
            this.$refs.form.reset()
            this.$parent.popupClose()
        },
        process_save(){ 
            if (this.$refs.form.validate()) {
                const data = this.professional
                data.createdOn = new Date
                data.birthdate = new Date(data.birthdate)
                data.license_expiry_date = new Date(data.license_expiry_date)
                data.avatar = this.avatar
                data.profession = this.profession
                this.$parent.saveProfessional(data)
            }
        },
        process_update(){
            if (this.$refs.form.validate()) {
                delete this.professional['createdOn']
                delete this.professional['avatar']
                const data = this.professional
                data.birthdate = new Date(data.birthdate)
                data.license_expiry_date = new Date(data.license_expiry_date)
                if(this.avatar !== null) {
                    data.avatar = this.avatar
                }
                this.$parent.updateProfessional(data)
            }
        }
    }
}
</script>