<template>
  <v-app id="forgot_password">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <!-- <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"> -->
              <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
                <v-spacer></v-spacer>
                  <img class="mt-2" :src="require('@/assets/hhc-site-officialogo-180x090y.png')">
                  <v-spacer></v-spacer>
                </v-toolbar>
              <form @submit.prevent>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      id="username"
                      label="Email"
                      prepend-icon="mdi-account"
                      type="text"
                      v-model.trim="loginForm.email"
                      placeholder="you@email.com"
                      v-on:keyup.enter="login"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-btn id="login" color="success" text @click="reset" to="/login">Go to Login</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn id="login" color="primary" outlined @click="reset">Reset Password</v-btn>
                </v-card-actions>
              </form>
              
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  const fb = require('../firebaseInit.js')
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      loginForm: {
        email: '',
        password: ''
      }
    }),
    methods: {
      reset() {
        fb.auth.sendPasswordResetEmail(this.loginForm.email).then(() => {
          alert('Password reset link was sent to your email')
        this.$router.push('/login')
    }).catch(err => {
        console.log(err)
        alert(err)
        this.performingRequest = false
        this.errorMsg = err.message
    })
      }
    }
  }
</script>