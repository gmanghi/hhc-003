<template>
    <div id="register">
        <h1 class="subheading grey--text">Register New User</h1>
        <v-container>
            <v-card>    
                <v-form
                    ref="form"
                    v-model="valid"
                >  
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="12" sm="12">
                                <v-text-field label="Name" v-model="name" :rules="requiredStringRules"></v-text-field>
                            </v-col>
                            <v-col cols="12"  md="12" sm="12">
                                <v-text-field label="Username" v-model="email" :rules="requiredEmailRules"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" sm="12">
                                <v-text-field label="Position" v-model="position" :rules="requiredStringRules"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" sm="12">
                                <v-text-field label="Contact Number" v-model="contact_number" :rules="requiredStringRules"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="save">Save</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
            <v-overlay :value="overlay" z-index="202">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
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
const fb = require('../firebaseInit.js')
import randomstring from 'randomstring'
export default {
    data(){
        return {
            overlay: false,
            snackbar: false,
            notification: '',
            valid: true,
            requiredStringRules: [
                v => !!v || 'Field is required'
            ],
            requiredEmailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            name: '',
            email: '',
            position: '',
            contact_number: '',
        }
    },
    methods: {
        save(){
            this.overlay = true
            if (this.$refs.form.validate()) {
                const parent = this
                fb.usersCollection.where('email','==',this.email).get().then(function(doc){
                    if (doc.exists) {
                        parent.overlay = false
                        parent.snackbar = true
                        parent.notification = 'Username/Email already exists'
                    }
                    else{
                        fb.usersCollection.add({
                            name: parent.name,
                            email: parent.email,
                            position: parent.position,
                            contact_number: parent.contact_number,  
                            status: 'Created'
                        }).then(doc => {
                            parent.overlay = false
                            parent.snackbar = true
                            parent.notification = 'Successfully Created'
                            parent.$refs.form.reset()
                        }).catch(error => {
                            parent.overlay = false
                            parent.snackbar = true
                            parent.notification = error
                        })
                    }
                }).catch(function(error){
                    parent.overlay = false
                    parent.snackbar = true
                    parent.notification = error
                })

                // fb.usersCollection.doc(user.uid).set({
                //     name: parent.name,
                //     email: parent.email,
                //     position: parent.position,
                //     contact_number: parent.contact_number,
                // }).then(() => {
                //     fb.auth.sendPasswordResetEmail(parent.email).then(() => {
                //         parent.$refs.form.reset()
                //         parent.overlay = false
                //         parent.snackbar = true
                //         parent.notification = 'Registration Successful'
                //     }).catch(err => {
                //         parent.overlay = false
                //         parent.snackbar = true
                //         parent.notification = err
                //     })
                // }).catch(err => {
                //     parent.overlay = false
                //     parent.snackbar = true
                //     parent.notification = err
                //     console.log(err)
                // })



                // const password = randomstring.generate(7);
                
                // fb.auth.createUserWithEmailAndPassword(this.email, password).then(user => {
                //     console.log(user.uid)
                // }).catch(err => {
                //     parent.overlay = false
                //     parent.snackbar = true
                //     parent.notification = err
                // })                
            }
        }
    }
}
</script>