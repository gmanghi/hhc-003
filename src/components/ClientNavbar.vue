<template>
    <v-row class="mb-3">
        <v-btn text color="grey" :to="{ name: 'client_details', params: { id: client_id } }">
            <v-icon left>mdi-account-outline</v-icon>
            <span class="caption text-uppercase">Facesheet</span>
        </v-btn>
        <v-btn text color="grey" :to="{ name: 'client_contract', params: { id: client_id } }">
            <v-icon left>mdi-pen</v-icon>
            <span class="caption text-uppercase">Contract</span>
        </v-btn>
        <v-btn text color="grey" :to="{ name: 'client_visits', params: { id: client_id } }">
            <v-icon left>mdi-calendar-outline</v-icon>
            <span class="caption text-uppercase">Scheduled Visits</span>
        </v-btn>
        <v-btn text color="grey" :to="{ name: 'client_hids', params: { id: client_id } }">
            <v-icon left>mdi-note-text-outline</v-icon>
            <span class="caption text-uppercase">HIDs</span>
        </v-btn>
    </v-row>
</template>
<script>
export default {
    data(){
        return {
            client_id: ''
        }
    },
    mounted(){
        this.client_id = this.$route.params.id
    }
    
}
</script>