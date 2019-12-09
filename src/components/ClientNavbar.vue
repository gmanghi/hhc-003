<template>
    <v-row class="mb-3">
        <v-btn text color="grey" :to="{ name: 'client_details', params: { id: this.client_id } }">
            <v-icon left>mdi-account-outline</v-icon>
            <span class="caption text-uppercase">Facesheet</span>
        </v-btn>
        <v-btn text color="grey" :to="{ name: 'client_contract', params: { id: this.client_id } }">
            <v-icon left>mdi-pen</v-icon>
            <span class="caption text-uppercase">Contract</span>
        </v-btn>
        <v-btn text color="grey" :to="{ name: 'client_visits', params: { id: this.client_id } }">
            <v-icon left>mdi-calendar-outline</v-icon>
            <span class="caption text-uppercase">Scheduled Visits</span>
        </v-btn>
        <v-btn text color="grey" :to="{ name: 'client_hids', params: { id: this.client_id } }">
            <v-icon left>mdi-note-text-outline</v-icon>
            <span class="caption text-uppercase">HIDs</span>
        </v-btn>
        <v-btn text color="grey" :to="{ name: 'client_hvrpn', params: { id: this.client_id } }">
            <v-icon left>mdi-note-text-outline</v-icon>
            <span class="caption text-uppercase">Home Health Care Visit</span>
        </v-btn>
        <v-btn text color="grey" :to="{ name: 'client_prescription', params: { id: this.client_id } }">
            <v-icon left>mdi-note-text-outline</v-icon>
            <span class="caption text-uppercase">Prescription</span>
        </v-btn>
        <v-btn text color="grey" :to="{ name: 'client_pmp', params: { id: this.client_id } }">
            <v-icon left>mdi-note-text-outline</v-icon>
            <span class="caption text-uppercase">Patient Medication Profile</span>
        </v-btn>
        <v-btn text color="grey" :to="{ name: 'client_css', params: { id: this.client_id } }">
            <v-icon left>mdi-note-text-outline</v-icon>
            <span class="caption text-uppercase">Customer Satisfaction Survey</span>
        </v-btn>
    </v-row>
</template>
<script>
export default {
    data(){
        return {
            client_id: this.$route.params.id,
        }
    },
}
</script>