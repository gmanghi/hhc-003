<template>
  <v-app class="grey lighten-4" style="background-color: #5BB4F5">
    <Navbar v-if="currentUserEmail" :currentUserEmail="currentUserEmail" :currentUserDisplayName="currentUserDisplayName" />
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
        currentUserDisplayName(){
          return this.$store.getters["Auth/getCurrentUserDisplayName"];
        },
        currentUserEmail() { 
            return this.$store.getters["Auth/getCurrentUserEmail"];
        },
        currentUserProfile() {
            return this.$store.getters["Auth/getCurrentUserProfile"];
        }
    },
};
</script>
