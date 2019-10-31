<template>
  <v-app id="login">
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

                    <v-text-field
                      id="password"
                      label="Password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model.trim="loginForm.password"
                      placeholder="******"
                      v-on:keyup.enter="login"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn id="login" color="primary" @click="login">Login</v-btn>
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
  const fb = require('../firebaseConfig.js')
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
      login() {
        // fb.auth.setPersistence('session').then(function() {
        //   // Existing and future Auth states are now persisted in the current
        //   // session only. Closing the window would clear any existing state even
        //   // if a user forgets to sign out.
        //   // ...
        //   // New sign-in will be persisted with session persistence.
        //   return firebase.auth().signInWithEmailAndPassword('admin001@hhc.com', 'password');
        // }).catch(function(error) {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        // });
        fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
            this.$store.commit('Auth/setCurrentUser', user.user)
            this.$store.dispatch('Auth/fetchUserProfile')
            this.$router.push('/')
        }).catch(err => {
            alert(err.message);
            console.log(err)
        })
      }
    }
  }
</script>