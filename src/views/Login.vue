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
              <v-app-bar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-app-bar>
              <form @submit.prevent>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Email"
                      prepend-icon="mdi-account"
                      type="text"
                      v-model.trim="loginForm.email"
                      placeholder="you@email.com"
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      label="Password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model.trim="loginForm.password"
                      placeholder="******"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="login">Login</v-btn>
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
        fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
            this.$store.commit('setCurrentUser', user.user)
            this.$store.dispatch('fetchUserProfile')
            this.$router.push('/')
        }).catch(err => {
            alert(err.message);
            console.log(err)
        })
      }
    }
  }
</script>