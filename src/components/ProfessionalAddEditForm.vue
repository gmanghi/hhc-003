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
                    v-if="method == 'create'"
                    @click="pop_professional_form">
                    <v-icon small>mdi-plus</v-icon>
                </v-btn>
                <v-btn
                    fixed
                    dark
                    fab
                    bottom
                    right
                    color="green"
                    v-if="method == 'update'"
                    @click="pop_professional_form">
                    <v-icon small>mdi-pencil</v-icon>
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
                                                :rules="requiredStringRules"
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
                                    <v-menu
                                    v-model="birthdate_popup"
                                    :close-on-content-click="false"
                                    max-width="290"
                                    >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                            :rules="requiredStringRules"
                                            :value="professional.birthdate"
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
        </v-dialog>
        <v-overlay :value="overlay" z-index="202">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-row>
    <!-- Popup End -->
</template>

<script>
import moment from 'moment'

export default {
    props: [ 'professional', 'profession', 'popup', 'method', 'overlay', 'document_id' ],
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
        pop_professional_form(){
            this.$parent.popupOpen()
        },
        // popup_create_professional(){ 
        //     // this.birthdate = this.default_birthdate
        //     this.$parent.popupCreateProfessional()
        // },
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
                const parent = this
                this.$parent.saveProfessional(data).then(function(result){
                    if(result){
                        parent.popup_close()
                    }
                }).catch(function (error){
                    console.log(error)
                    parent.popup_close()
                })
            }
        },
        process_update(){
            if (this.$refs.form.validate()) {
                delete this.professional['createdOn']
                delete this.professional['avatar']
                const data = this.professional
                data.document_id = this.document_id
                // data.birthdate = new Date(data.birthdate)
                // data.license_expiry_date = new Date(data.license_expiry_date)
                if(this.avatar !== null) {
                    data.avatar = this.avatar
                }
                const parent = this

                this.$store.commit('Professional/setProfessional', data)
                this.$store.dispatch("Professional/updateProfessional").then(function(doc){
                    console.log('updateProfessional',doc)
                    parent.popup_close()
                }).catch(function(error){
                    parent.popup_close()
                    parent.notification = error
                    parent.snackbar = true
                })


                // this.$parent.updateProfessional(data).then(function(result){
                //     if(result){
                //         parent.popup_close()
                //     }
                // }).catch(function (error){
                //     console.log(error)
                //     parent.popup_close()
                // })
            }
        }
    }
}
</script>