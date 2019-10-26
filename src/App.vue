<template>
  <v-app class="grey lighten-4">
    <Navbar v-if="currentUser" />
    <v-content class="mx-4 my-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from "@/components/Navbar.vue";
export default {
  name: 'App',
  components: { Navbar },
  computed: {
    ...mapState(['currentUser'])
  }
};
</script>
