<template>
        <div id="client-details">
        <h1 class="subheading grey--text">Client Details</h1>
        <v-container>
            <ClientNavbar></ClientNavbar>
            {{client}}
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClientNavbar from '@/components/ClientNavbar'
export default {
    components: {
        ClientNavbar
    },
    beforeRouteUpdate (to, from, next) {
        this.$store.commit('Client/setDocumentId', to.params.id)
        this.$store.dispatch("Client/getClient")
        next();
    },
    mounted() {
        this.$store.commit('Client/setDocumentId', this.$route.params.id)
        this.$store.dispatch("Client/getClient");
    },
    computed: {
        ...mapGetters({
            client: 'Client/client'
        })
    },
}
</script>