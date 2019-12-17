<template>
  <v-app class="grey lighten-4">
    <Navbar v-if="currentUserEmail" :currentUserEmail="currentUserEmail" />
    <v-content class="mx-4 my-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
import Navbar from "@/components/Navbar.vue";
export default {
    name: 'App',
    components: { Navbar },
    computed: {
        currentUserEmail() { 
            return this.$store.getters["Auth/getCurrentUserEmail"];
        },
        currentUserProfile() {
            return this.$store.getters["Auth/getCurrentUserProfile"];
        }
    },
};
</script>
